import Phaser from 'phaser';
import BombSpawner from './BombSpawner';
import collectStar from '../utils/collect-star';
import createPlataform from '../utils/create-plataforms';
import createPlayer from '../utils/create-players';
import createScore from '../utils/create-score';
import createStars from '../utils/create-stars';
import playerMovement from '../utils/player-movement';
import preloadAssets from '../utils/preload-assets';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    this.score = undefined;
    this.stars = undefined;
    this.gameOver = undefined;
    this.bombSpawner = undefined;
  }

  preload() {
    preloadAssets.call(this);
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.bombSpawner = new BombSpawner(this, 'bomb');

    this.cursors = this.input.keyboard.createCursorKeys();
    this.score = createScore.call(this, 16, 16, 0);
    console.log('score ')
    const plataform = createPlataform.call(this);
    this.stars = createStars.call(this);
    this.player = createPlayer.call(this);
    const bombsGroup = this.bombSpawner.group
    this.physics.add.collider(this.stars, plataform)
		this.physics.add.collider(bombsGroup, plataform)
    this.physics.add.collider(this.stars, plataform);
    this.physics.add.collider(this.player, plataform);

		this.physics.add.overlap(this.player, this.stars, collectStar.bind(this), null, this)
    this.physics.add.collider(this.player, bombsGroup, this.hitBomb, null, this)

    
  }
  hitBomb (player, bomb) {
    {
      this.physics.pause()
  
      player.setTint(0xff0000)
  
      player.anims.play('turn')
  
      this.gameOver = true
    }
  }
  update () {
    if (this.gameOver) {
      return;
    }
    playerMovement.call(this);
  }
}
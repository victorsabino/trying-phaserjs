import Phase from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('bomb', 'assets/bomb.png');

    this.load.spritesheet('character', 'assets/character.png', {frameWidth: 32, frameHeight: 48});
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.image(400,300, 'star');
    this.cursors = this.input.keyboard.createCursorKeys();

    const plataform = this.createPlataform()
    this.player = this.createPlayer()
    
    
    this.physics.add.collider(this.player, plataform)
    
  }
  update () {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160)
      this.player.anims.play('right', true)
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn', true)
    }
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-360)
    }
  }

  createPlataform() {
    const plataform = this.physics.add.staticGroup();

    plataform.create(400, 568, 'ground').setScale(2).refreshBody()
    plataform.create(600, 400, 'ground')
    plataform.create(50, 250, 'ground')
    plataform.create(750, 220, 'ground')

    return plataform;
  }

  createPlayer () {
    const player = this.physics.add.sprite(100, 450, 'character');
    player.setBounce(0.2)
    player.setCollideWorldBounds(true)

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('character', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
			key: 'turn',
			frames: [ { key: 'character', frame: 4 } ],
			frameRate: 20
		})
		
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('character', { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		})
    return player;
  }
}
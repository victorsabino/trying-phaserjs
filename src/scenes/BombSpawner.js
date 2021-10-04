import Phaser from 'phaser';

export default class BombSpawner {
  constructor (scene, bombKey = 'bomb') {
    this.scene = scene;
    this.key = bombKey;

    this.group = this.scene.physics.add.group(); 
  }

  getGroup() {
    return this.group;
  }

  spawn (playerX = 0) {
    console.log('spawn ',playerX);
    const x = playerX;
    const bomb = this.group.create(x, 16, this.key);
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200,200), 20);
    return bomb;
  }
}
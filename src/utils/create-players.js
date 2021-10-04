export default function () {
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
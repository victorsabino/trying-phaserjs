import Phaser from 'phaser';

export default function () {
  const stars = this.physics.add.group({
    key: 'star',
    repeat: 11,
    setXY: {x: 12, y: 0, stepX: 70}
  });

  stars.children.iterate((/** @type {{ setBounceY: (arg0: number) => void; }} */ child) => {
    child.setBounceY(Phaser.Math.FloatBetween(0, 0.8));
  })

  return stars;
}

import Phaser from 'phaser';

const format = score => `Score: ${score}`;

export default class Score extends Phaser.GameObjects.Text {
  constructor(scene, x, y, score, style) {
    super(scene, x, y, format(score), style);
    this.score = score || 0;
  }
  setScore(score) {
    this.score = score;
    this.updateScoreText();
  }

  add(points) {
    this.setScore(this.score + points);
  }

  updateScoreText () {
    this.setText(format(this.score));
  }
}
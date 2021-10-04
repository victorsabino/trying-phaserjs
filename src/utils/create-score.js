import Score from '../ui/score';

export default function (x, y, score) {
  const style = {fontSize: 32, fill: 'black'}
  const label = new Score(this, x, y, score, style);
  this.add.existing(label);
  return label;
}
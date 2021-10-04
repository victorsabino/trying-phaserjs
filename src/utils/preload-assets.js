export default function () {
  const base_url = '/public/assets/';

  this.load.image('sky', `${base_url}sky.png`);
  this.load.image('star', `${base_url}star.png`);
  this.load.image('ground', `${base_url}platform.png`);
  this.load.image('bomb', `${base_url}bomb.png`);

  this.load.spritesheet('character', `${base_url}character.png`, {frameWidth: 32, frameHeight: 48});
}
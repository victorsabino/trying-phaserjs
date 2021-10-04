export default function (){
  const plataform = this.physics.add.staticGroup();

  plataform.create(400, 568, 'ground').setScale(2).refreshBody()
  plataform.create(600, 400, 'ground')
  plataform.create(50, 250, 'ground')
  plataform.create(750, 220, 'ground')

  return plataform;
}

export default function (player, star) {
  console.log('this.bombSpawner ', this.stars)

  star.disableBody(true, true)

  if (this.stars.countActive(true) === 0)
		{
			//  A new batch of stars to collect
			this.stars.children.iterate((child) => {
				child.enableBody(true, child.x, 0, true, true)
			})
		}
		this.bombSpawner.spawn(this.player.x);

  this.score.add(1)
}
import type { HttpContext } from '@adonisjs/core/http'

export default class NftsController {
  baseEndPoint =
    'https://raw.githubusercontent.com/mnkhod/shape-town-api/refs/heads/main/api/public'

  nftCollection = [
    {
      description:
        'As a novice settler in these untamed lands, you must prove your worth by gathering your first crop. Visit your assigned plot of farmland, plant the provided seeds, and tend to them until they bear fruit. Learn the basics of cultivation and experience the satisfaction of reaping what you sow.',
      image: `${this.baseEndPoint}/${'FirstHarvestAchievement'}.png`,
      name: 'First Harvest',
    },
    {
      description:
        "Your first successful forage marks the beginning of understanding the forest's bounty. The wilderness has shared its secrets with you, teaching you that nature provides for those who respect and learn from it.",
      image: `${this.baseEndPoint}/${'GiftFromNatureAchievement'}.png`,
      name: 'Gift from Nature',
    },
    {
      description:
        "A milestone every aspiring angler remembers - your first successful catch! Whether it's a tiny minnow or a surprising trophy fish, this achievement marks your entry into the world of fishing.",
      image: `${this.baseEndPoint}/${'FirstFishAchievement'}.png`,
      name: 'First Fish',
    },
    {
      description:
        'The wilderness holds countless treasures for those who know where to look. Master the art of foraging by collecting various wild plants and mushrooms from the forest. Be cautious - not everything that grows is safe to eat.',
      image: `${this.baseEndPoint}/${'NaturalForagerAchievement'}.png`,
      name: 'Natural Forager',
    },
    {
      description:
        "Your first earned coins mark an important milestone in your journey. By completing honest work and trading with fellow villagers, you'll experience the satisfaction of earning your own money and learn the value of commerce in our community.",
      image: `${this.baseEndPoint}/${'TasteOfGoldAchievement'}.png`,
      name: 'Taste of Gold',
    },
  ]

  single({ params }: HttpContext) {
    return this.nftCollection[params.id]
  }

  all() {
    return this.nftCollection
  }
}

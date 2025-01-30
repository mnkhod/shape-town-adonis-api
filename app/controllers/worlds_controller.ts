import type { HttpContext } from '@adonisjs/core/http'

export default class WorldsController {
  createNeverForgetWaterAchievement({ params }: HttpContext) {
    return { achievement: 'Never forget water', address: params.address }
  }

  createFirstHarvestAchievement() {
    return { achievement: 'First harvest' }
  }

  createGiftFromNatureAchievement() {
    return { achievement: 'Gift from nature' }
  }
}

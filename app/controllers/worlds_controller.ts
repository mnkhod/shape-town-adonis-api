import { EvmService } from '#services/evm_service'

import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class WorldsController {
  @inject()
  createNeverForgetWaterAchievement({ params }: HttpContext, evmService: EvmService) {
    return { achievement: 'Never forget water', address: params.address, test: evmService.test() }
  }

  createFirstHarvestAchievement() {
    return { achievement: 'First harvest' }
  }

  createGiftFromNatureAchievement() {
    return { achievement: 'Gift from nature' }
  }
}

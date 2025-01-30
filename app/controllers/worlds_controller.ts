import { EvmService } from '#services/evm_service'

import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

export default class WorldsController {
  @inject()
  async createFirstHarvestAchievement({ params, response }: HttpContext, evmService: EvmService) {
    await evmService.createFirstHarvestAchievement(params.address, response)
  }

  @inject()
  async createGiftFromNatureAchievement({ params, response }: HttpContext, evmService: EvmService) {
    await evmService.createGiftFromNatureAchievement(params.address, response)
  }

  @inject()
  async createFirstFishAchievement({ params, response }: HttpContext, evmService: EvmService) {
    await evmService.createFirstFishAchievement(params.address, response)
  }
}

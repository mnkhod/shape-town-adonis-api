/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const WorldsController = () => import('#controllers/worlds_controller')
const NftsController = () => import('#controllers/nfts_controller')

router.get('/nft/data/:id', [NftsController, 'single'])
router.get('/nft/data', [NftsController, 'all'])

router
  .group(() => {
    router.get('create/0/:address', [WorldsController, 'createNeverForgetWaterAchievement'])
    router.get('create/1/:address', [WorldsController, 'createFirstHarvestAchievement'])
    router.get('create/2/:address', [WorldsController, 'createGiftFromNatureAchievement'])
  })
  .prefix('/world/nft')

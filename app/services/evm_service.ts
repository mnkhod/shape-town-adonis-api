import { ethers } from 'ethers'
import env from '#start/env'

export class EvmService {
  // Your code here

  getWorldNftContract() {
    let provider = new ethers.JsonRpcProvider('https://worldchain-sepolia.g.alchemy.com/public')
    let wallet = new ethers.Wallet(env.get('NEW_WORLD_PRIVATE_KEY'))

    let signer = wallet.connect(provider)
    let contract = new ethers.Contract('', [], signer)

    return contract
  }

  test() {
    return 'test'
  }
}

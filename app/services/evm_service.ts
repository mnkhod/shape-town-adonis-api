import { ethers } from 'ethers'
import env from '#start/env'
import type { Response } from '@adonisjs/core/http'

export class EvmService {
  // Your code here

  async createFirstHarvestAchievement(address: string, response: Response) {
    await this.achievementMint(address, response, 0)
  }

  async createGiftFromNatureAchievement(address: string, response: Response) {
    await this.achievementMint(address, response, 1)
  }

  async createFirstFishAchievement(address: string, response: Response) {
    await this.achievementMint(address, response, 2)
  }

  async getWorldNftContract() {
    let provider = new ethers.JsonRpcProvider('https://worldchain-sepolia.g.alchemy.com/public')
    let wallet = new ethers.Wallet(env.get('NEW_WORLD_PRIVATE_KEY'))

    let signer = wallet.connect(provider)
    let contract = new ethers.Contract(
      '0x3A711d5E7e4d69eBef1B7e1b3715f463619A254c',
      [
        'function balanceOf(address,uint256) view returns (uint256)',
        'function balanceOfBatch(address[],uint256[]) view returns (uint256[])',
        'function burn(address,uint256,uint256)',
        'function getRoleAdmin(bytes32) view returns (bytes32)',
        'function grantRole(bytes32,address)',
        'function hasRole(bytes32,address) view returns (bool)',
        'function isApprovedForAll(address,address) view returns (bool)',
        'function mint(address,uint256,uint256,bytes)',
        'function renounceRole(bytes32,address)',
        'function revokeRole(bytes32,address)',
        'function safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
        'function safeTransferFrom(address,address,uint256,uint256,bytes)',
        'function setApprovalForAll(address,bool)',
        'function setURI(string)',
        'function uri(uint256) view returns (string)',
      ],
      signer
    )

    return contract
  }

  async achievementMint(address: string, res: Response, id: number) {
    const contract = await this.getWorldNftContract()

    try {
      let receipt = await contract.mint(address, id, 1, '0x')
      let result = await receipt.wait()

      res.send({
        hash: result.hash,
      })
    } catch (e) {
      console.log(e)

      res.json({
        code: 502,
        error: 'Contract Error',
      })
    }
  }
}

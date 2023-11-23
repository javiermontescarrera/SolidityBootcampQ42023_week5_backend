import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MyToken.json';
import * as ballotJson from './assets/TokenizedBallot.json'; //for voting feature
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  contract: ethers.Contract;
  ballotContract: ethers.Contract;
  provider: ethers.Provider;
  wallet: ethers.Wallet;

  constructor(private configService: ConfigService) {
    this.provider = new ethers.JsonRpcProvider(
      this.configService.get<string>('RPC_ENDPOINT_URL'),
    );
    this.wallet = new ethers.Wallet(
      this.configService.get<string>('PRIVATE_KEY'),
      this.provider,
    );
    this.contract = new ethers.Contract(
      this.configService.get<string>('TOKEN_ADDRESS'),
      tokenJson.abi,
      this.wallet,
    );
    this.ballotContract = new ethers.Contract(
      this.configService.get<string>('BALLOT_ADDR'),
      ballotJson.abi,
      this.wallet,
    );
  }

  getHello(): string {
    return 'Hello ljjjd!';
  }

  getSomethingElse(): string {
    return 'Something else';
  }

  getContractAddress(): string {
    return this.configService.get<string>('TOKEN_ADDRESS');
  }

  // async getTokenName(): Promise<string> {
  //   const name = await this.contract.name();
  //   return name;
  // }

  // async getTotalSupply() {
  //   const totalSupply = await this.contract.totalSupply();
  //   return ethers.formatUnits(totalSupply);
  // }
  
  // async getTokenBalance(address: string) {
  //   const balance = await this.contract.balanceOf(address);
  //   return ethers.formatUnits(balance);
  // }
  
  async getTransactionReceipt(hash: string) {
    const txReceipt = await this.provider.getTransaction(hash);
    return txReceipt;
  }

  getServerWalletAddress() {
    return this.wallet.address;
  }
  
}

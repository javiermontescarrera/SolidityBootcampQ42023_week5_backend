import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MintTokenDto } from './dtos/mintToken.dto';
import { SubscribersDto } from './dtos/subscribers.dto';
import { VotingDto } from './dtos/voting.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('something-else')
  getSomethingElse(): string {
    return this.appService.getSomethingElse();
  }

  @Get('contract-address')
  getContractAddress() {
    return { result: this.appService.getContractAddress() };
  }

  // @Get('token-name')
  // async getTokenName() {
  //   return { result: await this.appService.getTokenName() };
  // }

  // @Get('total-supply')
  // async getTotalSupply() {
  //   return { result: await this.appService.getTotalSupply() };
  // }

  // @Get('token-balance/:address')
  // async getTokenBalance(@Param('address') address: string) {
  //   return { result: await this.appService.getTokenBalance(address) };
  // }

  @Get('transaction-receipt')
  async getTransactionReceipt(@Query('hash') hash: string) {
    return { result: await this.appService.getTransactionReceipt(hash) };
  }
  //
  @Get('server-wallet-address')
  getServerWalletAddress() {
    return { result: this.appService.getServerWalletAddress() };
  }
}

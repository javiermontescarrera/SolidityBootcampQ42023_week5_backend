import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { OpenBetsDto } from './dtos/openBets.dto';
import { betDto } from './dtos/bet.Dto';
import { buyDto } from './dtos/buy.Dto';

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

  @Get('token-address')
  async getTokenAddress() {
   return { ressult: await this.appService.getTokenAddress() };
  }

  @Get('token-name')
  async getTokenName() {
    return { result: await this.appService.getTokenName() };
  }

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

  @Get('lottery-status')
  async getLotteryStatus() {
    return { result: await this.appService.getLotteryStatus() };
  }

  @Get('get-betsOpen')
  async betsOpen() {
    return { result: await this.appService.betsOpen() };
  }

  @Post('open-bets')
  async openBets(@Body() body: OpenBetsDto) {
    const { duration } = body;
    return { result: await this.appService.openBets(duration) };
  }

  @Get('token-balance/:account')
  async tokenBalance(@Param('account') account: string) {
    return { result: await this.appService.tokenBalance(account) };
  }
  
  @Post('close-lottery')
  async closeLottery() {
    return { result: await this.appService.closeLottery() };
  }
    @Post('bet')
  async bet(@Body() body: betDto) {
    const { numberOfBets } = body;
    return { result: await this.appService.bet(numberOfBets) };
  }

  @Post('buy')
  async buy(@Body() body: buyDto) {
    const { amount } = body;
    return { result: await this.appService.buy(amount) };
  }

}

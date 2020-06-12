import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('smartcontract')
export class SmartcontractController {
  constructor(private configService: ConfigService) {}

  @Get()
  getConfig(): object {
    return {
      'node-ws': this.configService.get('NODE_WS'),
      'node-https': this.configService.get('NODE_HTTPS'),
      'listner-graphL': this.configService.get('LISTNER_GRAPHL'),
      'token-factory': this.configService.get('TOKEN_FACTORY'),
      'crowdSale-factory': this.configService.get('CROWDSALE_FACTORY'),
      'dao-factory': this.configService.get('DAO_FACTORY'),
      'token-factory-abi': this.configService.get('TOKEN_FACTORY_ABI'),
      'crowdSale-factory-abi': this.configService.get('CROWDSALE_FACTORY_ABI'),
      'dao-factory-abi': this.configService.get('DAO_FACTORY_ABI'),
    };
  }
}

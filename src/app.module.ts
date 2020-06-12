import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmartcontractController } from './smartcontract/smartcontract.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, SmartcontractController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

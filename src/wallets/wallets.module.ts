import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MainController } from './main.controller';
import { MainService } from './main.service';
import { Wallet } from './models/wallet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet])],
  controllers: [MainController],
  providers: [MainService]
})
export class WalletsModule {}

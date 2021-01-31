import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common';

import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { MainService } from './main.service';

@Controller('wallets')
export class MainController {

  constructor(private readonly mainService: MainService){}

  /**
   * get all wallets
   */
  @Get()
  getAll() {
    return this.mainService.getAll();
  }

  /**
   * get wallet by id
   * @param id wallet id
   */
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.mainService.getById(id);
  }

  /**
   * create wallet from model
   * @param createWalletDto wallet model
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.mainService.create(createWalletDto);
  }

  /**
   * remove wallet by id
   * @param id wallet id
   */
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.mainService.remove(id);
  }

  /**
   * update wallet by id
   * @param updateWalletDto wallet data
   * @param id wallet id
   */
  @Put(':id')
  update(@Body() updateWalletDto: UpdateWalletDto, @Param('id') id: number) {
    return this.mainService.update(id, updateWalletDto);
  }

}

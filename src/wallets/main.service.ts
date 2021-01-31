import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';

import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './models/wallet.entity';

@Injectable()
export class MainService {

  constructor(
    @InjectRepository(Wallet)
    private walletsRepository: Repository<Wallet>,
  ) {}
  
  getAll(): Promise<Wallet[]> {
    return this.walletsRepository.find();
  }

  getById(id: number): Promise<Wallet> {
    return this.walletsRepository.findOne(id);
  }

  async create(wallet: CreateWalletDto): Promise<Wallet> {
    const wlt = plainToClass(CreateWalletDto, wallet);
    const errors = await validate(wlt);
    if (errors.length) {
      throw new BadRequestException('Invalid wallet create data');
    }
    return this.walletsRepository.save(wallet);
  }

  async remove(id: number): Promise<void> {
    await this.walletsRepository.delete(id);
  }

  async update(id: number, data: UpdateWalletDto) {
    const wlt = plainToClass(UpdateWalletDto, data);
    const errors = await validate(wlt);
    if (errors.length) {
      throw new BadRequestException('Invalid wallet update data');
    }
    return (await this.walletsRepository.update({ id }, wlt)).generatedMaps;
  }

}

import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class MainService {
  
  async getAll(): Promise<string[]> {
    return Promise.resolve([]);
  }

  getById(id: number) {
    return id
  }

  create(data: CreateWalletDto) {
    return data
  }

  remove(id: number) {
    return id;
  }

  update(id: number, data: UpdateWalletDto) {
    return data;
  }

}

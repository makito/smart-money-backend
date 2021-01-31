import { Exclude, Expose } from 'class-transformer';
import { IsString, MaxLength, IsNumber } from 'class-validator';

@Exclude()
export class UpdateWalletDto {
  @Expose()
  @IsString()
  @MaxLength(25)
  readonly name: string;

  @Expose()
  @IsNumber()
  readonly amount: number;
}

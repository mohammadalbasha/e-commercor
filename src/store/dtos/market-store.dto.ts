import { IsString, IsDefined } from 'class-validator';

export class MarketDto {
  @IsString()
  @IsDefined()
  marketAddress: string;

  @IsString()
  @IsDefined()
  marketName: string;
}

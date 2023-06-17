import { IsString, IsOptional } from 'class-validator';

export class MarketDto {
  @IsString()
  @IsOptional()
  marketAddress: string;

  @IsString()
  @IsOptional()
  marketName: string;

  @IsString()
  @IsOptional()
  marketVerificationUrl: string;
}

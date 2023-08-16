import { IsString, IsDefined, IsOptional } from 'class-validator';

export class AddTheme {
  @IsString()
  @IsDefined()
  primary: string;

  @IsString()
  @IsOptional()
  secondary: string;
}

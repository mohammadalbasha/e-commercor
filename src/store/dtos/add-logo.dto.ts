import { IsString, IsDefined } from 'class-validator';

export class AddLogo {
  @IsString()
  @IsDefined()
  logo: string;
}

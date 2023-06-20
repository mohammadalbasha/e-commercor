import { IsDefined, IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCollectionDto {
  //@Validate(UniqueCategoryName, [Category, 'name'])
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  // @Validate(IsRef, [Store])
  // @IsString()
  // @IsDefined()
  // @IsNotEmpty()
  storeId: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;
}

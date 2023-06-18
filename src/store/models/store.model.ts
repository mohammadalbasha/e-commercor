import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Type } from 'class-transformer';
import mongoose from 'mongoose';
import { defaultSchemaOptions } from 'src/shared/constants/common';
import { BaseModel } from 'src/shared/models/base.model';

@Schema(defaultSchemaOptions)
export class Seller extends BaseModel {
  @Prop({ index: true, required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  // TODO:
  @Exclude()
  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop()
  ssn: string;

  @Prop()
  nationality: string;

  @Exclude()
  @Prop()
  hashedRefreshToken: string;
}

@Schema(defaultSchemaOptions)
export class Store extends BaseModel {
  @Prop({ index: true, required: true, unique: true })
  name: string;

  @Prop()
  paypalMerchantId: string;

  @Prop({ default: false, required: true })
  isAccepted: boolean;

  //  @Exclude()
  @Prop({ required: true })
  @Type(() => Seller)
  seller: Seller;

  @Prop()
  businessType: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  country: string;

  @Prop({ default: false })
  isMarket: boolean;

  @Prop()
  marketAddress: string;

  @Prop()
  marketName: string;

  @Prop({ required: true, default: true })
  isVerifiedAsMarket: boolean;

  @Prop()
  landingPage: mongoose.Schema.Types.Mixed;

  //   @PropEnum(Gender)
  //   gender?: Gender;

  //   @PropRef(Country)
  //   countryId?: string; // if no country id then didn't init

  //   @PropObject(Country)
  //   country?: Country;

  //   @Prop({default: false})
  //   is_administrator!: boolean;

  //   @Prop()
  //   admin_company?: Company
}

export type StoreDocument = Store & Document;
export const StoreSchema = SchemaFactory.createForClass(Store);

// UserSchema.pre('save', function() { console.log('Hello from pre save') });
// StoreSchema.post('findOne', async function(result) {
//     if (!result)
//       return result;
//     if (result.is_administrator){
//       await result.populate('administrator_centralRoleId');
//     }
//     if(result.administrator_centralRoleId)
//       {result.administrator_centralRole = [...result.administrator_centralRoleId];
//       result.administrator_centralRoleId = result.administrator_centralRoleId.map (cr => {
//         return cr.id;
//       })
//       }

//     return result;
// });

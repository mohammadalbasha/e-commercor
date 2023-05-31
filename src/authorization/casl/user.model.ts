import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from '../../shared/models/base.model';

@Schema()
export class User extends BaseModel{
  // Common Things
  
  /* this !username will cause error if we fetch administrator_updatedBy which is null 
  as Baraa about this
  we may make it mandotary in the dto but optional here */
  @Prop({index: true})
    name: string;
}

//export type UserDocument = User &   AccessibleFieldsDocument;
export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User);

// UserSchema.pre('save', function() { console.log('Hello from pre save') });
  UserSchema.post('findOne', async function(result) {
    if (!result)
      return result;
    if (result.is_administrator){
      await result.populate('administrator_centralRoleId');
    }
    if(result.administrator_centralRoleId)
      {result.administrator_centralRole = [...result.administrator_centralRoleId];
      result.administrator_centralRoleId = result.administrator_centralRoleId.map (cr => {
        return cr.id;
      })
      }
  
    return result;
});

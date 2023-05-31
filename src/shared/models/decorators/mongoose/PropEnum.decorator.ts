import { Prop } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

export default function PropEnum(Enum, defaultValue = null): PropertyDecorator {
  if (defaultValue === null) {
    return Prop({ required: false, enum: Enum, index: true  })
  } else {
    return Prop({ required: false, enum: Enum, index: true, default: defaultValue  })
  }
}
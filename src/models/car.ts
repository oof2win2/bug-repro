import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    collection: "cars",
  },
})
export class CarClass {
  @prop()
  name!: string;

  @prop()
  model!: string;

  @prop()
  manufacturer!: string;
}

const CarModel = getModelForClass(CarClass);
export default CarModel;

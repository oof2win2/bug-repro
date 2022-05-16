import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    collection: "users",
  },
})
export class UserClass {
  @prop()
  name!: string;

  @prop()
  birthdate!: Date;
}

const UserModel = getModelForClass(UserClass);
export default UserModel;

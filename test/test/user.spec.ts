import UserModel from "../../src/models/user";

describe("user test", () => {
  it("Should get a user from users and then delete it", async () => {
    const user = await UserModel.create({
      name: "bob",
      birthdate: new Date(0),
    });
    expect(user.name).toBe("bob");
    expect(user.birthdate).toEqual(new Date(0));

    await UserModel.findOneAndDelete({
      name: user.name,
    });

    const newUser = await UserModel.findOne();
    expect(newUser).toBe(null);
  });
});

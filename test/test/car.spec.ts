import CarModel from "../../src/models/car";

describe("car test", () => {
  it("Should get a car from cars and then delete it", async () => {
    const car = await CarModel.create({
      name: "bob",
      model: "rx70",
      manufacturer: "mazda",
    });
    expect(car.name).toBe("bob");
    expect(car.model).toBe("rx70");
    expect(car.manufacturer).toBe("mazda");

    await CarModel.findOneAndDelete({
      name: car.name,
    });

    const newCar = await CarModel.findOne();
    expect(newCar).toBe(null);
  });
});

import { connect, disconnect } from "./connect";
import mongoose from "mongoose";

beforeAll(async () => {
  console.log("pre-connect", mongoose.connection.readyState);
  await connect();
  console.log("connected", mongoose.connection.readyState);
});

afterAll(async () => {
  // Watchers throw when disconnecting for some reason
  console.log("disconnecting soon", mongoose.connection.readyState);

  for (const collection of Object.values(mongoose.connection.collections)) {
    await collection.deleteMany({});
  }
  // console.log("disconnect")
  await disconnect();
  console.log("disconnected", mongoose.connection.readyState);
  // mongoose.connection.close()
}, 20e3);

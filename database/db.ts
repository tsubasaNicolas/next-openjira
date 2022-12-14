import mongoose from "mongoose";
/*

0 disconnect
1 connected
2 conecting
3 disconnecting
*/

const mongooConnection = {
  isConnected: 0,
};

export const connect = async () => {
  try {
    if (mongooConnection.isConnected) {
      console.log("ya estábamos conectados");
      return;
    }
    if (mongoose.connections.length > 0) {
      mongooConnection.isConnected = mongoose.connections[0].readyState;

      if (mongooConnection.isConnected === 1) {
        console.log("usando conexión anterior");
        return;
      }
      await mongoose.disconnect();
    }
    await mongoose.connect(process.env.MONGO_URL || "");
    mongooConnection.isConnected = 1;
    console.log("Conectado a MongoDB", process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
};

export const disconnect = async () => {
  try {
    if (process.env.NODE_ENV === "development") return;

    if (mongooConnection.isConnected === 0) return;

    await mongoose.disconnect();
    console.log("Desconectado de MongoDB");
  } catch (error) {
    console.log(error);
  }
};

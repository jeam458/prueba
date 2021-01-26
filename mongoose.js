const mongoose = require("mongoose");

//const uri = process.env.MONGODB_URL;
const uri = 'mongodb://localhost:27017/prueba';

let connection;
const connect = async () => {
  try {
    connection = await mongoose.createConnection(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      bufferCommands: false, //deshabilitar almacenamiento en bufer mongoose
      bufferMaxEntries: 0, //almacenamiento en búfer del controlador MongoDB
    });
    return connection;
  } catch (e) {
    console.error("No se pudo conectar a MongoDB...");
    throw e;
  }
};

function getConnection() {
  return connection;
}

module.exports = { connect, getConnection };

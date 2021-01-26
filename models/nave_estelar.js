const mongoose = require("mongoose");
const { getConnection } = require("../mongoose");
const conn = getConnection();
const Schema = mongoose.Schema;

module.exports = conn.model(
  "Nave_estelar",
  new Schema({ 
      id:{type:Number, unique:true, initialize:0},
      mglt:{type:String},
      capacidad_carga:{type:Number},
      consumibles:{type:String},
      creditos_en_costo:{type:Number},
      fecha_creacion:{type:Date, default: new Date()},
      tripulacion:{type:Number},
      fecha_edicion:{type:Date},
      tipo_hiperimpulsor:{type: String},
      logitud:{type:Number},
      fabricante:{type:String},
      max_velocidad_atmosfera:{type:Number},
      modelo:{type:String},
      nombre:{type:String, required:true},
      pasajeros:{type:Number},
      peliculas:[],
      pilotos:[],
      clase_nave_estelar:{type:String},
      url:{type:String}
    })
);
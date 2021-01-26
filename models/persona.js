const mongoose = require("mongoose");
const { getConnection } = require("../mongoose");
const conn = getConnection();
const Schema = mongoose.Schema;

module.exports = conn.model(
  "Persona",
  new Schema({ 
      id: {type:Number, unique:true, default:0},
      anios: { type: String },
      color_ojos:{type:String},
      peliculas:[],
      genero:{type:String},
      color_cabello:{type:String},
      altura:{type:Number},
      mundonatal:{type:String},
      peso:{type:Number},
      nombre:{type:String,require:true},
      color_piel:{type:String},
      fecha_creacion:{type:Date, default: new Date()},
      fecha_edicion:{type:Date, default: new Date()},
      especies:{type:String},
      naves_estelares:[],
      url:{type:String},
      vehiculos:[]
    })
);
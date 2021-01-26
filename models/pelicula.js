const mongoose = require("mongoose");
const { getConnection } = require("../mongoose");
const conn = getConnection();
const Schema = mongoose.Schema;

module.exports = conn.model(
  "Pelicula",
  new Schema({ 
      id:{type:Number, unique:true, initialize:0},
      caracteristicas: [], 
      fecha_creacion:{type:Date, default: new Date()},
      director: { type: String, required:true},
      edicion:{type:Date, default: new Date()},
      id_episodio: { type: Number},
      rastreo_apertura: {type:String},
      planetas:[],
      productor:{type:String, required:true},
      fecha_lanzamiento:{type:Date, default: new Date()},
      especies:[],
      naves_estelares:[],
      titulo:{type:String, required:true},
      url:{type:String},
      vehiculos:[]
    })
);
const mongoose = require("mongoose");
const { getConnection } = require("../mongoose");
const conn = getConnection();
const Schema = mongoose.Schema;

module.exports = conn.model(
  "Planeta",
  new Schema({ 
      id:{ type: Number, default:0, unique:true },
      clima: { type: String},
      diametro: { type: Number },
      gravedad: { type: String },
      nombre:{ type: String, required: true },
      periodo_orbital:{ type: Number},
      poblacion:{ type: Number},
      residentes:[],
      periodo_rotacion:{ type: Number },
      superficie_agua:{ type: Number },
      terreno:{ type: String },
      url:{ type: String }
    })
);


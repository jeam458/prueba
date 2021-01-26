const express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//definiendo las estructuras

app.get("/", async (req, res) => {
  try {
    const Note = require("./models/Note");
    const notes = await Note.find({});
    return res.status(200).send(
      `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Prueba</title>
          <style>
              html {
                  text-align: center;
                  background-color: black;
                  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                  color: white;
                  font-size: 2rem;
              }
      
              textarea {
                  resize: none;
                  border: 2px solid #9ca3af;
                  border-radius: 4px;
                  background-color: #f3f4f6;
                  padding: 0.5rem;
                  width: 90%;
              }
      
              button {
                  padding-left: 2rem;
                  padding-right: 2rem;
                  padding-top: 7px;
                  padding-bottom: 7px;
                  background-color: #f3f4f6;
                  border: 2px solid #9ca3af;
                  color: #4b5563;
                  border-radius: 4px;
              }
      
              p {
                  border-bottom: 2px solid;
                  padding: 1rem;
                  text-align: left;
              }
          </style>
      </head>
      
      <body>
      
          <h1>El API de Star Wars</h1>
      
          <p>modifiación del API de Star Wars a español</p>
      
      </body>
      
      </html>`
    );
  } catch (e) {
    console.error(e);
    return res.send(e);
  }
});

//crud planetas
app.get("/api/planetas",async(req,res)=>{
  try{
    const Planeta = require("./models/planeta");
    const planetas = await Planeta.find();
    return res.status(200).send(planetas)
  } catch (e){
    return res.send(e)
  }
})

app.post("/api/planeta", async (req, res, next ) => {
  try {
    const Planeta = require("./models/planeta");
    const planeta = new Planeta(req.body);
    console.log(req.body);
    await planeta.save(function(err, planeta){
      if (err) { return next(err) };
        return res.send(planeta)
    });
  } catch (e) {
    return res.send(e);
  }
});

app.put("/api/planeta/:id",async(req,res)=>{
  const Planeta = require("./models/planeta");
  try {
    Planeta.find({id:req.params.id},function(err,planeta){
      planeta.clima=req.body.clima;
      planeta.diametro=req.body.diametro;
      planeta.gravedad=req.body.nombre;
      planeta.nombre=req.body.nombre;
      planeta.periodo_orbital=req.body.periodo_orbital;
      planeta.poblacion=req.body.poblacion;
      planeta.residentes=req.body.residentes;
      planeta.periodo_rotacion=req.body.periodo_rotacion;
      planeta.superficie_agua=req.body.superficie_agua;
      planeta.terreno=req.body.terreno;
      planeta.url=req.body.url;
      planeta.save(function(err){
        if(err){res.send(err)};
         return res.json(planeta)
      })
    })
  }catch (e) {
    return res.send(e);
  }
 
})

app.delete("/api/planeta/:id"),async(req,res)=>{
  const Planeta = require("./models/planeta");
  Planeta.findByIdAndRemove(req.params.id, function(err) {
    if (err) { res.send(err) }
    return res.json({ message: 'El planeta fue eliminado' });
})
}



module.exports = app;

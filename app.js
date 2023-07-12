const express = require("express") //Para requerir el módulo de express
const app = express() //Para crear el objeto de la aplicación

app.get("/", (req, res) => {
    res.send('Hello World')
}) //Agregando un middleware -- Se indica ruta, y función que necesita un requerimiento y una respuesta

app.listen(8000) //Así el servidor escucha por el puerto indicado
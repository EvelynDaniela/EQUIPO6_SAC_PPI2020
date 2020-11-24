const express = require(`express`)
const morgan = require("morgan")
const app = express()


//Middelwares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use("/api/", require("./routes/estudiantes"))
app.use("/api/", require("./routes/docente"))

app.get("/", function (req, res) {
    res.send("Hola, bienvenidos al maravilloso mundo del aprendizaje")
})

app.listen(8030, function () {
    console.log("El servidor esta corriedno en un puerto 8030")
})
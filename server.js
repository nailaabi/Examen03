const express = require('express')
const app = express()
const port = 3000

app.get('/animales', (req, res) => {
  const animales = ["jirafa", "perro", "gato", "tortuga", "capibara"]
  res.json(animales)           })

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)})
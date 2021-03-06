//Importa as dependências que acabamos de instalar
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist/bbaApp"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/bbaApp/index.html"));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080, () => {
  console.log("Servidor iniciado na porta" + PORT);
});

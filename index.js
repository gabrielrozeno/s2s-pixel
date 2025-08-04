const express = require("express");
const app = express();
const port = 80;

// Rota que recebe apenas click_id e event
app.get("/postback", (req, res) => {
  const { click_id, event } = req.query;

  if (!click_id || !event) {
    return res.status(400).send("Faltando parâmetros obrigatórios.");
  }

  console.log("Postback recebido:", { click_id, event });

  // Aqui você pode salvar ou processar os dados conforme sua lógica
  res.status(200).send("Recebido com sucesso.");
});

app.listen(port, () => {
  console.log(`Servidor de postbacks ouvindo em http://localhost:${port}`);
});

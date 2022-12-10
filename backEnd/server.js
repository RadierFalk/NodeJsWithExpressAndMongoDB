import app from "./src/app.js";

//definindo porta do computador para hospedar o servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

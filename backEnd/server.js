import app from "./src/app";

//definindo porta do computador para hospedar o servidor
const port = 3000;

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

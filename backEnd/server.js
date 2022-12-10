// importando o modulo nativo HTTP
const http = require("http");
//definindo porta do computador para hospedar o servidor
const port = 3000;

const rotas = {
  "/": "Curso de Node",
  "/livros": "Entrei na pg de Livros",
  "/autores": "Listagem de Autores",
  "/editora": "editoras",
  "/sobre": "Inf. sobre projeto ",
};

// constante que cria o servidor e passo os parametros que ele irá responder
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

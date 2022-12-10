import express from "express";

const app = express();

const livros = [
  { id: 1, Titulo: "Senhor dos Aneis" },
  { id: 2, Titulo: "Harry Potter e a Pedra Filosofal" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});
app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

export default app;

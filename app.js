const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Produtos = require("./models/Produtos");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/produtos", function (req, res) {
  res.render("produtos");
});

app.get("/cad-produtos", function (req, res) {
  res.render("cad-produtos");
});

app.post("/add-produto", function (req, res) {
  Produtos.create({
    nome: req.body.nome,
    quantidade: req.body.quantidade,
    preco: req.body.preco,
    prateleira: req.body.prateleira,
    descricao: req.body.descricao,
    categoria: req.body.categoria,
  })
    .then(function () {
      res.redirect("/produto");
      //res.send("Pagamento cadastro com sucesso!")
    })
    .catch(function (erro) {
      res.send("Erro: Produto não foi cadastrado com sucesso!" + erro);
    });
  //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>")
});

app.listen(8081);

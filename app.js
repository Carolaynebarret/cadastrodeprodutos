const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const Produtos = require("./models/Produtos");
const moment = require("moment");
const path = require("path");

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    helpers: {
      formatDate: (date) => {
        return moment(date).format("DD/MM/YYYY");
      },
    },
  })
);

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//public
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));
//Rotas

app.get("/produtos", function (req, res) {
  Produtos.findAll({ order: [["id", "ASC"]] }).then(function (produtos) {
    res.render("produtos", { produtos: produtos });
  });
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
      res.redirect("/produtos");
      //res.send("Pagamento cadastro com sucesso!")
    })
    .catch(function (erro) {
      res.send("Erro: Produto não foi cadastrado com sucesso!" + erro);
    });

  //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>")
});

app.get("/del-pagamento/:id", function (req, res) {
  Produtos.destroy({
    where: { id: req.params.id },
  })
    .then(function () {
      res.redirect("/produtos");
    })
    .catch(function (erro) {
      res.send("Não apagado");
    });
});

app.listen(8081);

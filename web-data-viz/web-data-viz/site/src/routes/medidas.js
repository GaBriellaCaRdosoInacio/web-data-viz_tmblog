var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:iduser", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:iduser", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/tempoPreQuiz", function (req, res) {
    medidaController.enviarTempoPreQuiz(req, res);
})

router.get("/tempoSelecionado", function (req, res) {
    medidaController.obterTempoPreQuiz(req, res);
})

router.post("/dadosQuiz/", function (req, res) {
    medidaController.buscarDadosQuiz(req, res);
})

router.get("/dadosAtuais/:iduser", function (req, res) {
    medidaController.obterDadosAtuais(req, res);
})

module.exports = router;
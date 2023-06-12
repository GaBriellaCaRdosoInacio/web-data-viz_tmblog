var medidaModel = require("../models/medidaModel");



function enviarTempoPreQuiz(req,res) {
    var tempo= req.body.tempoServer;
    var fkusuario= req.body.fkusuarioServer;


    if (tempo ==0 || fkusuario == undefined) {
        res.status(400).send("Seu resultado está errado, refaça o game!");
    } 
    else {
        
     // Passe os valores como parâmetro e vá para o arquivo medidaModel.js
        medidaModel.enviarTempoPreQuiz(tempo, fkusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao contabilizar sua pontuação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterTempoPreQuiz(req,res){
    var iduser= req.params.iduser;
    var tempo= req.body.tempoServer;
    var fkusuario= req.body.fkusuarioServer;

    medidaModel.obterTempoPreQuiz (tempo, fkusuario, iduser)
    
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a sua pontuação.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarDadosQuiz(req,res) {
    var acertos = req.body.acertoServer;
    var erros= req.body.erroServer;
    var fkuser= req.body.fkuserServer;


    if (acertos > 5 || erros > 5 || fkuser == undefined) {
        res.status(400).send("Seu resultado está errado, refaça o quiz!");
    } 
    else {
        
     // Passe os valores como parâmetro e vá para o arquivo medidaModel.js
        medidaModel.buscarDadosQuiz(acertos, erros, fkuser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao contabilizar sua pontuação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function obterDadosAtuais (req, res) {

    var acertos = req.body.acertoServer;
    var erros= req.body.erroServer;
    var fkuser= req.body.fkuserServer;


    medidaModel.obterDadosAtuais (acertos, erros, fkuser)
    
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a sua pontuação.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    enviarTempoPreQuiz,
    obterTempoPreQuiz,
    buscarDadosQuiz,
    obterDadosAtuais 

}
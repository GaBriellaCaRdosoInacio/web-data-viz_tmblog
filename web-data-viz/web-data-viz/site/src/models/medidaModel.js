var database = require("../database/config");


function enviarTempoPreQuiz(tempo, fkusuario){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", tempo, fkusuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    instrucao = `
    INSERT INTO preQuiz (tempo, fkusuario) VALUES ('${tempo}', '${fkusuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterTempoPreQuiz(tempo, fkusuario){
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nome, tempo from preQuiz join usuario on fkusuario=iduser order by tempo limit 5;`;
    } else {
        console.log("\nO AMBIENTE (desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function buscarDadosQuiz(acertos, erros, fkuser){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", acertos, erros, fkuser);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    instrucao = `
    INSERT INTO resultadoFinal (acertos, erros, fkuser) VALUES ('${acertos}', '${erros}', '${fkuser}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosAtuais (acertos, erros, fkuser) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select acertos,erros from resultadoFinal join usuario on fkuser= ${iduser} order by resultadoFinal.idResultado desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}



module.exports = {
    enviarTempoPreQuiz,
    obterTempoPreQuiz,
    buscarDadosQuiz,
    obterDadosAtuais 
}

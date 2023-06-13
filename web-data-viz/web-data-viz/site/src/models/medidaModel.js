var database = require("../database/config");

function buscarUltimasMedidas(iduser, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${iduser}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${iduser}
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idusuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idusuario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idusuario} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


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

function obterTempoPreQuiz(){
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nome, tempo from preQuiz join usuario on fkusuario= iduser order by tempo desc limit 5;`;
    } else {
        console.log("\nO AMBIENTE (desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function buscarDadosQuiz(acertos, erros, iduser){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", acertos, erros, iduser);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    instrucao = `
    INSERT INTO resultadoFinal (acertos, erros, fkuser) VALUES ('${acertos}', '${erros}', '${iduser}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterDadosAtuais (iduser) {


    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select acertos,erros from resultadoFinal join usuario on fkuser= iduser order by resultadoFinal.idResultado desc limit 1;`;
    } else {
        console.log("\nO AMBIENTE (desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    enviarTempoPreQuiz,
    obterTempoPreQuiz,
    buscarDadosQuiz,
    obterDadosAtuais 
}


//copiar codigos do web data viz aqui novamente para pegar o parametro de iduser;
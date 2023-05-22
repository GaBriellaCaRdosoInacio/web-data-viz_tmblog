
//var global validar resposta
var listaResp= [];

function validar() {

    var select = opcoes.value;
    listaResp.push(select);

    for(var posicao=0; posicao<listaResp.lenght; posicao++){
        if(listaResp[posicao+1] == listaGabarito[posicao+1]){
            acerto+=1;
        }
    } 

}
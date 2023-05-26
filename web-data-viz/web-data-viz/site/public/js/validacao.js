
//var global validar resposta
var listaResp= [];
var contadorQuiz=0;
var listaGabarito= [' ', 'A', 'B', 'A','A', 'A'];
var acerto=0;

function validar() {

    contadorQuiz++

    if(contadorQuiz>0){

    if(contadorQuiz==1){
        var select = opcoes.value;
        listaResp.push(select-1);
    }

    else{
        alert('Só pode validar a resposta uma vez');
    }
    

    // for(var posicao=0; posicao<listaResp.lenght; posicao++){
    //     if(listaResp[posicao] == listaGabarito[posicao]){
    //         acerto+=1;
    //     }
    // } 

        
}
    alert(`${acerto}`)

}



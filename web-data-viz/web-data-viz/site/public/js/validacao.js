
//var global validar resposta
var listaResp= [];
var listaGabarito= [' ', 'A', 'B', 'A','A', 'A'];
var acerto=0;
var select= resposta.value;
var contadorQuiz=0;

function validar() {
contadorQuiz++

    if(contadorQuiz > 0){
        if(contadorQuiz==1){
            listaResp.push(select);
        }

        else{
            alert('Só pode validar uma vez');
        }
    }
       
    }


    // for(var posicao=0; posicao<listaResp.lenght; posicao++){
    //     if(listaResp[posicao] == listaGabarito[posicao]){
    //         acerto+=1;
    //     }
    // } 

        





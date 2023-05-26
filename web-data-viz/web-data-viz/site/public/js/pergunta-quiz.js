// pergunta.innerHTML= listaPerg[contadorP];
var listaPerg= [["1- Você considera sua imaginação fértil?"],["2- Você se considera uma pessoa que atrai sorte?"], ["3- Se um amigo seu está com problemas, você tentaria diversas coisas para poder ajuda-lo?"], ["4- Você tenta ser positivo mediante as dificuldades?"], ["5- Sua família é caótica?"]];
var contadorP=0;


function proximo(){
    if(contadorP< listaPerg.length){
    pergunta.innerHTML= listaPerg[contadorP];
}

oi.innerHTML= ' ';
clique.innerHTML= ' ';
// var pontos=0;
// if(numeroDapergunta == listaPerg.length){
//     if (numeroDapergunta = 0 && valorInput== input_radioA){
//     }
//     if (numeroDapergunta = 1 && valorInput== input_radioB){
//     }
//     if (numeroDapergunta = 2 && valorInput== input_radioA){
//     }
//     if (numeroDapergunta = 3 && valorInput== input_radioA){
//     }
//     if (numeroDapergunta = 4 && valorInput== input_radioA){
//     }
// }
contadorP++;
}








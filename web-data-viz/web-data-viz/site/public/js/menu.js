//variaveis globais 
var contador= 0;

//funcoes do menu de nav
function clickmenu() {
contador+=1

if(contador>0){
if(contador==1){
    mensagem.innerHTML= `<ul class="menu_resp"> 
        <li><a href="../Public/cadastro.html">Cadastro</a></li>
        <li><a href="../Public/login.html">Login</a></li>
        <li><a href="../Public/login.html">Quiz</a></li>
        <li><a href="../Public/imagens.html">Imagens</a></li>
        <li><a href="../Public/curiosidades.html">Curiosidade</a></li></ul>
`
} else {
    mensagem.innerHTML= ' ';
    contador=0
}
} 
} 
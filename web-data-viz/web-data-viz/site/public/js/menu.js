//variaveis globais 
var contador= 0;

//funcoes do menu de nav
function clickmenu() {
contador+=1

if(contador>0){
if(contador==1){
    mensagem.innerHTML= `<ul class="menu_resp"> 
        <li><a href="cadastro.html">Cadastro</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="login.html">Quiz</a></li>
        <li><a href="imagem.html">Imagens</a></li>
        <li><a href="curiosidades.html">Curiosidade</a></li></ul>`
} else {
    mensagem.innerHTML= ' ';
    contador=0
}
} 
} 
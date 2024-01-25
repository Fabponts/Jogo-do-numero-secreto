let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function exibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirNaTela("h1","Jogo do Numero Secreto");
exibirNaTela("p","Escolha um numero de 1 a 10");

function mensagensDaTela(){
    exibirNaTela("h1","Jogo do Numero Secreto");
    exibirNaTela("p","Escolha um numero de 1 a 10");
}
 mensagensDaTela()   

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        let palavraTentativa = numeroTentativas > 1 ? "tentativas" : "tentativa";
        exibirNaTela("h1",`Você adivinhou !!`);
        let mensagemTentativas = `O numero era ${numeroSecreto}, você acertou em ${numeroTentativas} ${palavraTentativa}`;
        exibirNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if(chute > numeroSecreto)
    {
        exibirNaTela("p","O numero secreto é menor");
    }else{
        exibirNaTela("p","O numero secreto é maior");
    }
    numeroTentativas ++;
    limparCampo();
}
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    mensagensDaTela();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}





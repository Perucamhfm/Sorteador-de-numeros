function sortear() {
    vezes = 1 
    let lista = [];
    let quantidade = document.getElementById("quantidade").value;
    let numeroInicial = document.getElementById("de").value;
    let numeroFinal = document.getElementById("ate").value;
    while (vezes<=quantidade){
        numeroSorteado = sorteio(numeroInicial,numeroFinal);
        lista.push(numeroSorteado);
        vezes++;
    };
    substituirTexto("resultado",lista);
    ativarBotãoReniciar()
}

function sorteio(x,y){
    n = parseInt(Math.random()*y+1);
    if(n<x){
        return sorteio(x,y);
    }
    else{
        return n;
    }
};

function substituirTexto(id,numeros){
    let numeroVezes = document.getElementById(id);
    texto = String(`Números sorteados: ${numeros}`)
    numeroVezes.innerHTML = texto;
    numeroVezes.className ="texto__paragrafo";
}

function ativarBotãoReniciar(){
    let botaoReniciar = document.getElementById("btn-reiniciar");
    botaoReniciar.className = "container__botao";
    console.log(botaoReniciar);
}

function reiniciar(){
    limparCampos();
    let numeroVezes = document.getElementById("resultado");
    numeroVezes.innerHTML = "Números sorteados:  nenhum até agora";
    let lista=[];
    let botaoReniciar = document.getElementById("btn-reiniciar");
    botaoReniciar.className = "container__botao-desabilitado";
}

function limparCampos(){
    let quantidade = document.getElementById("quantidade");
    let numeroInicial = document.getElementById("de");
    let numeroFinal = document.getElementById("ate");
    quantidade.value = "";
    numeroInicial.value = "";
    numeroFinal.value = "1";
}
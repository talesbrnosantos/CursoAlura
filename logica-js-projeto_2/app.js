let listaDeNumerosSorteados =[];
let limiteDeNumero = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerText = texto;
 
}

function exibirMesagemInicial(){
exibirTextoNaTela('h1' , "Jogo do Número Secreto");
exibirTextoNaTela('p', 'Adivinhe um numero entre 1 a 10');
};

exibirMesagemInicial();

function verificarChute(){
  let chute = document.querySelector('input').value;

  if(chute == numeroSecreto){
    exibirTextoNaTela('h1' ,'Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p' , `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`)
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if(chute < numeroSecreto){
      exibirTextoNaTela('p' , 'O número é MAIOR')
    }else{
      exibirTextoNaTela('p' , 'o número é MENOR');
    };
    tentativas++
    limparCampo();
  };
};

function geraNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteDeNumero + 1);
  let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeElementosNaLista == limiteDeNumero) {
    listaDeNumerosSorteados = [];
  };

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return geraNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    return numeroEscolhido
  }
};

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
};

function reiniciarJogo() {
  numeroSecreto = geraNumeroAleatorio();
  limparCampo();
  exibirMesagemInicial();
  tentativas = 1;
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
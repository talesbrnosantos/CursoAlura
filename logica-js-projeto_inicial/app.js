alert("Bem vindo ao jogo do numero secreto");

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tentativas = 1; 

while( chute != numeroSecreto){
    chute = prompt(`Digite o numero secreto entre 1 e ${numeroMaximo}`);

    if( chute == numeroSecreto){
        alert(`Você acertou, o numero secreto é ${numeroSecreto} com ${tentativas} tentativass`);
    }else {
        if( chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        }else{
            alert(`O numero secreto é maior que ${chute}`); 
        };
        tentativas++  
    }
}g

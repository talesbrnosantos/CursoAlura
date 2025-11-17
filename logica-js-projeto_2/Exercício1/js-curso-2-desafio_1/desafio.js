let tituloDoDesafio = document.querySelector('h1');
 
tituloDoDesafio.innerHTML = "Hora do Desafio.";

//Essa função é acionada ao clicar o botão "Console" para verificarmos o funcionamento no console da pagina.
function verificarConsole(){
    console.log("Essa verificação foi concluida com sucesso!!");
};

//Essa função é acionada ao clicar o botão "Alert" irar aparecer a messagem descrita
function verificarAlert(){
    alert("EU AMO JS");
};

/*
Essa função é acionada ao clicar o botão "Prompt" onde um prompt no navegador aparece e com o argumento 
do usúario p alert aparece com a messagem. 
*/
function verificarCidade(){
    let cidadeDoUsuario = prompt("Qual é sua cidade?");

    alert(`Estive em ${cidadeDoUsuario} e lembrei de você`);
};

/*
Essa função é acionada ao clicar o botão "Soma" dois prompt aparece para o usúario adcionar 2 valores
e em seguinda um alert é apresentado com o resultado da soma 
*/
function verificarSoma(){
    let primeiroNumero = Number(prompt("Digíte um numero:"));
    let segundoNumero = Number(prompt("Digíte outro numero:"));

    let somaDosDoisValores = primeiroNumero + segundoNumero;

    alert(`A soma de (${primeiroNumero} + ${segundoNumero}) é : ${somaDosDoisValores}`);
};
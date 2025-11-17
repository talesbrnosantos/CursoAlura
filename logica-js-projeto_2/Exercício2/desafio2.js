
//Criar uma função que exibe "Olá, mundo!" no console.
function saudacao(){
    console.log('Olá, mundo!');
};

saudacao();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function nomeUsuario(nome){
    console.log(`Olá, ${nome}`)
};
nomeUsuario('tales')


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número

let numero = dobroValor(2)
function dobroValor(valor1){
    return valor1 * 2;
}
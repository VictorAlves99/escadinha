//definir variavle senha.
//perguntar ao usuario com prompt qual é a senha, até ele acertar.
//quando ele acertar alert que ele acertou.

let senha = '1234';
let acerto = '';
let tentativas = 0;

while (senha != acerto){
    acerto = prompt("Qual é a senha?");
    tentativas++;
}

alert("Você acertou em " + tentativas +  " tentativas");


//Definir uma variavel tamanho
//Desenhar uma escadinha do tamanho da variavel

let inputCaracter = document.querySelector("#caracter");
let inputTamanho = document.querySelector("#tamanho");

let botao = document.querySelector("button");

botao.onclick = function(){
    let tamanho = inputTamanho.value;
    let caracter = inputCaracter.value;
    let i = 1;
    let escadinha = "";
    while(i <= tamanho){
        
        escadinha = escadinha + caracter;
        let resposta = document.createElement("p");
        resposta.innerHTML = escadinha;
        let body = document.querySelector("body");
        body.appendChild(resposta);
        i++;
    }
}
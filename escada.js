let escada = document.querySelector("#degraus");
let simbolo = document.querySelector("#simbolo");
let botao = document.querySelector("button");

botao.onclick = function(){
    let resultado = document.createElement("p");
    while(escada > 0){
        simbolo += 1;
        escada--;
        resultado.innerHTML = "simbolo";
    }
    let divResposta = document.querySelector("#resposta");
    divResposta.appendChild(resultado);
}
let tamanho = Number(process.argv[2]);
let escada = "";

while (tamanho > 0){
    escada += '#';
    tamanho--;
    console.log(escada)
}

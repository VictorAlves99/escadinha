//coleta de dados

let aluno = {
    nome: process.argv [2],
    p1: Number(process.argv [3]),
    p2: Number(process.argv [4]),
    p3: Number(process.argv [5]),
    trabalho: Number(process.argv [6]),
    licao: Number(process.argv [7])
}

let total = aluno.p1+aluno.p2+aluno.p3+aluno.trabalho+aluno.licao;
let resultado = (total / 4);
let mencao = "";

mencao = resultado;

if(mencao < 5){
    mencao = "I";
} else if(mencao <= 7){
    mencao = "R";
} else if(mencao< 9){
    mencao = "B";
} else{
    mencao = "MB";
}

if(resultado < 5){ 
    console.log("Sinto muito",aluno.nome,", mas você foi reprovado... Com nota", resultado, "e menção", mencao);    
}else{
    console.log("Parabéns", aluno.nome, ", você passou! Com nota", resultado, "e com menção", mencao);      
}   
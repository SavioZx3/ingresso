let quantidadePista = 100;
let quantidadeSuperior = 200;
let quantidadeInferior = 400;

function comprar() {
    let local = document.getElementById("tipo-ingresso").value;
   
    let quantidadeIngresso = document.getElementById("qtd").value;
  
    if (local === "pista") {
        if ((quantidadePista - quantidadeIngresso) < 0) {
            alert(`Quantidade de ingresso indisponivel para a pista`);
        } else {
            quantidadePista -= quantidadeIngresso;
        }   
    }    
    
    if (local === "superior") {
        if ((quantidadeSuperior - quantidadeIngresso) < 0) {
            alert(`Quantidade de ingresso indisponivel para a cadeira superior`);
        } else {
            quantidadeSuperior -= quantidadeIngresso;
        }   
    }    
    
    if (local === "inferior") {
        if ((quantidadeInferior - quantidadeIngresso) < 0) {
            alert(`Quantidade de ingresso indisponivel para a cadeira inferior`);
        } else {
            quantidadeInferior -= quantidadeIngresso;
        }   
    }    

    let pista = document.getElementById("qtd-pista");
    pista.innerHTML = `${quantidadePista}`;
    let superior = document.getElementById("qtd-superior");
    superior.innerHTML = `${quantidadeSuperior}`
    let inferior = document.getElementById("qtd-inferior");
    inferior.innerHTML = `${quantidadeInferior}`

    document.getElementById("qtd").value = "";
}

let quantidadeCartas;

function inicio(){
    let sair = 0;
    while (sair === 0){
        quantidadeCartas = Number(prompt("Digite a quantidade de cartas que quer jogar (número par entre 4 e 14)"));
        if (quantidadeCartas >= 4 && quantidadeCartas <= 14 && quantidadeCartas % 2 ===0){
            sair = 1;
        }else{
            alert("Quantidade inválida!");
        }
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function distribuiCartas(){
    cartasMax = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    cartas = [];
    for(let i=0; i<quantidadeCartas; i++){
        cartas.push(cartasMax[i]);
    }
    cartas.sort(comparador);
    console.log(cartas);

    let containerCartas = document.querySelector(".container-cartas");
    containerCartas.innerHTML = "";

    for(let i=0; i<quantidadeCartas; i++){
        containerCartas.innerHTML += `<div class="card face"><img src="/resources/images/front.png" alt=""></div>`;
    }
}

function virar(carta){
    carta.classList.toggle("back-facee");
}

inicio();
//distribuiCartas();
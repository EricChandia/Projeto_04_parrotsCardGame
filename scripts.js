let quantidadeCartas;
cartas = [];

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
    for(let i=0; i<quantidadeCartas; i++){
        cartas.push(cartasMax[i]);
    }
    cartas.sort(comparador);
    console.log(cartas);

    let containerCartas = document.querySelector(".container-cartas");
    containerCartas.innerHTML = "";

    for(let i=0; i<quantidadeCartas; i++){

        if(cartas[i] === 1){
            containerCartas.innerHTML += `<div class="card" onclick="virar(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <img src="resources/images/bobrossparrot.gif" alt=""> </div> </div>`  
        }else if(cartas[i] === 2){
            containerCartas.innerHTML += `<div class="card" onclick="virar(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <img src="resources/images/explodyparrot.gif" alt=""> </div> </div>`  
        }else if(cartas[i] === 3){
            containerCartas.innerHTML += `<div class="card" onclick="virar(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <img src="resources/images/fiestaparrot.gif" alt=""> </div> </div>`  
        }else if (cartas[i] === 4){
            containerCartas.innerHTML += `<div class="card" onclick="virar(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <img src="resources/images/metalparrot.gif" alt=""> </div> </div>`  
        }else if(cartas[i] === 5){
            containerCartas.innerHTML += `<div class="card" onclick="virar(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <img src="resources/images/revertitparrot.gif" alt=""> </div> </div>`  
        }else if(cartas[i] === 6){
            containerCartas.innerHTML += `<div class="card" onclick="virar(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <img src="resources/images/tripletsparrot.gif" alt=""> </div> </div>`  
        }else{
            containerCartas.innerHTML += `<div class="card" onclick="virar(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <img src="resources/images/unicornparrot.gif" alt=""> </div> </div>`  
        }
    }
}

function virar(carta){
    let cartas = document.querySelectorAll(".card");
    let cartasViradas = document.querySelectorAll(".virar-tras");
    console.log(cartasViradas);
    console.log(cartas);
    
    let carta1 = "";
    let carta2 = "";

    if (cartasViradas.length = 0){
        cartaFrente = carta.querySelector(".front-face");
        cartaTras = carta.querySelector(".back-face");
        cartaFrente.classList.toggle("virar-frente");
        cartaTras.classList.toggle("virar-tras");
        cartasViradas = document.querySelectorAll(".virar-tras");
        console.log(cartasViradas);
    }else{
        let cartasViradas = document.querySelectorAll(".virar-tras");
        cartaFrente = carta.querySelector(".front-face");
        cartaTras = carta.querySelector(".back-face");
        cartaFrente.classList.toggle("virar-frente");
        cartaTras.classList.toggle("virar-tras");


    }


}

 

inicio();
distribuiCartas();
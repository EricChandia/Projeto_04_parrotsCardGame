let quantidadeCartas;
let cartas = [];
let carta1;
let carta2;
let contador = 0;
let aguarde = 0;
let cartasViradas;
let relogio = 0;

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
            containerCartas.innerHTML += `<div class="card" onclick="virarCarta(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"><div class="cardValue">1</div> <img src="resources/images/bobrossparrot.gif" alt=""> </div> </div>`  
        }else if(cartas[i] === 2){
            containerCartas.innerHTML += `<div class="card" onclick="virarCarta(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"><div class="cardValue">2</div><img src="resources/images/explodyparrot.gif" alt=""> </div> </div>`  
        }else if(cartas[i] === 3){
            containerCartas.innerHTML += `<div class="card" onclick="virarCarta(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <div class="cardValue">3</div><img src="resources/images/fiestaparrot.gif" alt=""> </div> </div>`  
        }else if (cartas[i] === 4){
            containerCartas.innerHTML += `<div class="card" onclick="virarCarta(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <div class="cardValue">4</div><img src="resources/images/metalparrot.gif" alt=""> </div> </div>`  
        }else if(cartas[i] === 5){
            containerCartas.innerHTML += `<div class="card" onclick="virarCarta(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <div class="cardValue">5</div><img src="resources/images/revertitparrot.gif" alt=""> </div> </div>`  
        }else if(cartas[i] === 6){
            containerCartas.innerHTML += `<div class="card" onclick="virarCarta(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"> <div class="cardValue">6</div><img src="resources/images/tripletsparrot.gif" alt=""> </div> </div>`  
        }else{
            containerCartas.innerHTML += `<div class="card" onclick="virarCarta(this)"> <div class="front-face face"> <img src="resources/images/front.png" alt=""> </div> <div class="back-face face"><div class="cardValue">7</div> <img src="resources/images/unicornparrot.gif" alt=""> </div> </div>`  
        }
    }
}

function virar(carta){
    cartaFrente = carta.querySelector(".front-face");
    cartaTras = carta.querySelector(".back-face");
    cartaFrente.classList.toggle("virar-frente");
    cartaTras.classList.toggle("virar-tras");
}


function virarCarta(carta){
    cartasViradas = document.querySelectorAll(".virar-tras");
    console.log(contador);
    

    if (carta.querySelector('.virar-tras') != null || aguarde === 1){

    }else{
        contador+= 1;

        if(cartasViradas.length % 2 === 0){
            carta1 = carta;
            virar(carta);
        }else{
            carta2 = carta;
            virar(carta);
            aguarde = 1;
            setTimeout(compararCartas, 1000);
        }
    }
}

function compararCartas()
{
    let carta1Value = Number(carta1.querySelector('.cardValue').innerHTML);
    let carta2Value = Number(carta2.querySelector('.cardValue').innerHTML);

    console.log(carta1Value, carta2Value);

    if (carta1Value === carta2Value){
        carta1=null;
        carta2=null;
        aguarde=0;
    }else{
        virar(carta1);
        virar(carta2);
        carta1=null;
        carta2=null;
        aguarde=0;
    }
    cartasViradas = document.querySelectorAll(".virar-tras");

    if (cartasViradas.length === cartas.length) 
    {
        alert(`Você ganhou em ${contador} jogadas e ${relogio} segundos!`)
        let sair = 0;
        while (sair === 0)
        {
            reiniciar = prompt("Deseja reiniciar? (sim ou não)");
            if (reiniciar == "sim"){
                sair = 1;
                quantidadeCartas = 0;
                cartas = [];
                carta1 = null;
                carta2 = null;
                contador = 0;
                aguarde = 0;
                cartasViradas = null;
                relogio = -1;
                inicio();
                distribuiCartas();
            }else if (reiniciar == "não"){
                sair = 1;
            }else{
                alert("Valor inválido!");
            }
        }
    
    }    
}

function contar() {
    relogio = 0;
    document.querySelector(".relogio").innerHTML = relogio;
    let idInterval = setInterval(aumentar, 1000);
  }

  function aumentar() {
    relogio++;
    document.querySelector(".relogio").innerHTML = relogio;
  }

inicio();
distribuiCartas();
contar();
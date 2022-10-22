var altura;
var largura;
var vidas = 1;
var ponto = 1;
var tempo = 30;
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')
console.log("🚀 ~ file: script.js ~ line 9 ~ nivel", nivel)

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if(nivel === 'impossivel'){
    criaMosquitoTempo = 500
}






function ajustaTamanhoPalco() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  
}

ajustaTamanhoPalco();

var cronometro = setInterval(()=>{
    if(tempo <= 0){
        clearInterval(criaMosca)
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
    }else{
        
    tempo -= 1
    document.getElementById('cronometro').innerHTML = tempo
    }

},1000)




function posicaoRandomica() {

    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        

      if(vidas > 2){
       
        window.location.href = 'fim_de_jogo.html'
      }else{
        document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png"
        vidas++
      }

       
    }



  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY



  console.log(posicaoX, posicaoY);

  ///////////////////


  
var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = tamanhoAleatorio() + ladoAleatorio()

mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'
mosca.id = 'mosca'
mosca.onclick = function (){
    document.getElementById('ponto').innerHTML = ponto
    ponto++
    this.remove()
}

document.body.appendChild(mosca)



}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    if(classe == 0){
        return 'mosquito-1 '
    }
    else if(classe == 1){
        return 'mosquito-2 '
    }
    else if(classe == 2){
        return 'mosquito-3 '
    }

}

function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2)

    if(classe == 0){
        return 'lado-A'
    }
    else if(classe == 1){
        return 'lado-B'
    }
   
 

}

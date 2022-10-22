var altura;
var largura;

function ajustaTamanhoPalco() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoPalco();





function posicaoRandomica() {

    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()
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

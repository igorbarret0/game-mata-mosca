
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var vel = 1
var criaMoscaTempo = 1500


var nvl = window.location.search
nvl = nvl.replace('?', '')

if (nvl === 'normal') {
    //1500
    criaMoscaTempo = 1500
} else if (nvl === 'dificl') {
    //1000
    criaMoscaTempo = 1000
} else if (nvl === 'chucknorris') {
    //750
    criaMoscaTempo = 750
}

function ajustaTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'page_vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    // remover o mosquito anterior (caso exista)
    if (document.getElementById('mosca')) {    
        document.getElementById('mosca').remove()


        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        }

        vidas ++
        
        }
    
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    if (posicaoX < 0) {
        posicaoX = 0
    }

    if (posicaoY < 0) {
        posicaoY = 0
    }

    console.log(posicaoX, posicaoY)


    // criar o elemento HTML

    var mosca = document.createElement('img') 
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoRandomico() + ' ' + ladoRandomico()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top =  posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }


    document.body.appendChild(mosca)
}

function tamanhoRandomico() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
    
    
}

function ladoRandomico() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}


function jogarNovamente() {
    window.location.href = 'index.html'
}


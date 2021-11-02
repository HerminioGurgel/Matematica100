/*
Variáveis do jogo
*/
let a = document.querySelector('input#resposta')
let resolvido = document.querySelector('input#resolvido')
let atual = document.querySelector('input#atual')
let proxima = document.querySelector('input#proximo')
let respostaUsr = document.querySelector('input#resposta')
let rodada = 0
let questoes = []

let objSoma = {
    parcelaX: 0,
    parcelaY: 0,
    soma: 0,
    resposta,

    geraConta() {
        this.parcelaX = this.geraNumero(0, 10)
        this.parcelaY = this.geraNumero(0, 10)
        this.soma = this.parcelaX + this.parcelaY
    },

    geraNumero(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },

    escreveConta() {
        return `${this.parcelaX} + ${this.parcelaY}`
    },

    escreveResposta(){
        if(this.resposta == this.soma ){
            new Audio("correct_sound_effect.mp3").play()
            return `${this.parcelaX} + ${this.parcelaY} = ${this.soma} \u{2705}`
        } else {
            return `${this.parcelaX} + ${this.parcelaY} = ${this.resposta} \u{274c}`
        }
    }
}

function focar() {
    a.focus()
    a.value = ""
}

function iniciar(){
    gerarContas()
    focar()
}

/*
Cria os array de questões e preenche ele com objSoma
*/
function gerarContas() {
    let conta
    for (let index = 0; index < 100; index++) {
        conta = Object.create(objSoma)
        conta.geraConta()
        questoes.push(conta)
    }
    resolvido.value = ``
    atual.value = `${questoes[0].escreveConta()}`
    proxima.value = `${questoes[1].escreveConta()}`
}

/*
Função que checa se a resposta que o usuário digitou está certa ou errada
Falta corrigir uma falha o maxlength do input respostaUsr que está causando uma pequena falha
*/
function checaResposta() {
    let tamanhoSoma = questoes[rodada].soma.toString().length
//    respostaUsr.maxlength = tamanhoSoma
    let tamanhoResUsr = respostaUsr.value.toString().length

    if (tamanhoSoma == tamanhoResUsr) {
        questoes[rodada].resposta = respostaUsr.value
        if (respostaUsr.value == questoes[rodada].soma) {
            trocaQuestao()
        } else {
            trocaQuestao()
        }
        focar()
    }
}

/*
Função que rotaciona o painel lateral de questões
Falta adicionar um som que será tocado em caso de erro
*/
function trocaQuestao(){
    rodada++
    resolvido.value = `${questoes[rodada - 1].escreveResposta()}`
    atual.value = `${questoes[rodada].escreveConta()}`
    proxima.value = `${questoes[rodada + 1].escreveConta()}`
    focar()
}
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

    escreveResposta() {
        if (this.resposta == this.soma) {
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

function iniciar() {
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
function trocaQuestao() {
    rodada++
    resolvido.value = `${questoes[rodada - 1].escreveResposta()}`
    atual.value = `${questoes[rodada].escreveConta()}`
    proxima.value = `${questoes[rodada + 1].escreveConta()}`
    focar()
}
/**
 * Daqui pra baixo é OO mais séria, não está implementado na funcionalidade
 * básica do jogo ainda, mas repete boa parte do código que estava solta pelo
 * código ou aninhada em funções que nem estavam dentro de objeto.
 * 
 * Em fim, é tentar arrumar as 100 linha de gambiarra aí em cima em um código
 * mais limpo e organizado
 * 
 * Todo o código antes desse comentário já foi organizados nas classes abaixo
 * Mas ainda é preciso organizar ele, principalmente na nomeação de variáveis,
 * chamadas de métodos e instâncias de objetos.
 * 
 * Falta apenas deixa a mecânica básica do jogo funcionar nessas classes ao
 * invés da gambiarra toda aí de cima
 */


class Contas {
    //Classe que tem como principal objetivo armazenar as contas do jogo
    constructor() {
        for (let index = 0; index < 100; index++) {
            const conta = new Soma()
            this.arrayDeContas.push(conta)
        }
    }
    arrayDeContas = []
}

class Soma {
    //Classe que representa uma soma simples
    constructor() {
        this.parcelaX = this.geraNumero(0, 10)
        this.parcelaY = this.geraNumero(0, 10)
        this.soma = this.parcelaX + parcelaY
    }

    respostaUsuario

    geraNumero(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    escreveConta() {
        return `${this.parcelaX} + ${this.parcelaY}`
    }

    escreveResposta() {
        if (this.respostaUsuario == this.soma) {
            new Audio("correct_sound_effect.mp3").play()
            return `${this.parcelaX} + ${this.parcelaY} = ${this.soma} \u{2705}`
        } else {
            return `${this.parcelaX} + ${this.parcelaY} = ${this.resposta} \u{274c}`
        }
    }
}

class Painel {
    //Classe responsável pela exibição e controle de conteúdo
    constructor() {
        let a = document.querySelector('input#resposta')
        let resolvido = document.querySelector('input#resolvido')
        let atual = document.querySelector('input#atual')
        let proxima = document.querySelector('input#proximo')
        let respostaUsr = document.querySelector('input#resposta')
        let rodada = 0
    }

    focar() {
        this.a.focus()
        this.a.value = ""
    }

    trocaQuestao() {
        rodada++
        resolvido.value = `${questoes[rodada - 1].escreveResposta()}`
        atual.value = `${questoes[rodada].escreveConta()}`
        proxima.value = `${questoes[rodada + 1].escreveConta()}`
        focar()
    }
}

class Cronometro {
    //Classe que representa o cronometro do jogo
    constructor() {
    }
}

class Jogo {
    //Classe que representa as variáveis de jogo e controla seu fluxo do início ao fim


    iniciar() {
        gerarContas()
        focar()
    }
}
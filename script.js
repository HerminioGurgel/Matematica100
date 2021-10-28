/*
A função focar tem o único objetivo de "começar" o jogo e
mudar o foco do cursor do mouse para o input resposta
Essa função é chamada automátcamente no Onload do body
*/
function focar(){
    var a = document.querySelector('input#resposta')
    a.focus()
    gerarContas()
}

function gerarContas(){

    let contas = [] //Array onde são armazenados objetos do tipo soma
    /*
    Objeto soma, gera duas parcelas e o resultado da soma
    Ainda falta melhorar a parte de OO, ta completamente na gambiarra
    */
    let soma = {
        parcelaX: 0,
        parcelaY: 0,
        soma: 0,
    
        //Função geraConta inicializa as variáveis do objeto
        geraConta(){
            this.parcelaX = this.geraNumero(0, 21)
            this.parcelaY = this.geraNumero(0, 21)
            this.soma = this.parcelaX + this.parcelaY
        },
        //Função geraNúmero é uma função para gerar dois números aleatórios
        geraNumero(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        //Tem a única função de escrever os dados onde vai ser apresentado no programa
        escreveConta(){
            return `${this.parcelaX} + ${this.parcelaY}`
        }
    } // Objeto soma acaba aqui
    
    //Isso aqui ainda vi ser colocado em um loop para preencher o array
    soma.geraConta()
    contas.push(soma)
    soma.geraConta()
    contas.push(soma)

    /*
    Essas variáveis representam os campos onde vão aparecer as repostas
    */
    let resolvido = document.querySelector('input#resolvido')
    let atual = document.querySelector('input#atual')
    let proxima = document.querySelector('input#proximo')

    resolvido.value=``
    atual.value=`${contas[0].escreveConta()}`
    proxima.value=`${contas[1].escreveConta()}`
}
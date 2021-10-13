function focar(){
    var a = document.querySelector('input#resposta')
    a.focus()
}

function gerarContas(){

    let teste = 'A'
    let contas = []
    let soma = {
        parcelaX: 0,
        parcelaY: 0,
        soma: 0,
    
        geraConta(){
            this.parcelaX = this.geraNumero(0, 21)
            this.parcelaY = this.geraNumero(0, 21)
            this.soma = this.parcelaX + this.parcelaY
        },
    
        geraNumero(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
    
        escreveConta(){
            return `${this.parcelaX} + ${this.parcelaY} = ${this.soma}`
        }
    }
    
    soma.geraConta()
    contas.push(soma)

    let resolvido = document.querySelector('input#resolvido')
    let atual = document.querySelector('input#atual')
    let proxima = document.querySelector('input#proximo')

    resolvido.value=`${contas[0].escreveConta()}`
    atual.value=`atual`
    proxima.value=`proximo`
}
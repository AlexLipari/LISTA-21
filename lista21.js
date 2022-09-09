let projeto = []
let orcamento = []

contador = 0
criarProjeto()

let opcao = prompt("insira R Receita ou D Despesa:")
let valor = parseFloat(prompt("Insira um valor:"))
let nome = prompt("insira o nome do projeto")
analizeProjeto(nome,valor,opcao)
function criarProjeto() {
    projeto[contador] = prompt("insira o nome do projeto:")
    orcamento[contador] = parseFloat(prompt("Insira o valor do orçamento:"))
    contador++

}

function analizeProjeto(nomeParametro, valorParametro, despesaParametro) {
    for (let index = 0; index < contador; index++) {
        if (nomeParametro == projeto[index]) {
            console.log(projeto[index])
            if (despesaParametro == "R") {
                orcamento[index] = orcamento[index] + valorParametro
            } else if (despesaParametro == "D") {
                orcamento[index] = orcamento[index] - valorParametro
            
            }
            console.log(projeto[index],orcamento[index])
        } 
        

    }

}

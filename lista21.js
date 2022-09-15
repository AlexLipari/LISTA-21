// let projeto = []
// let orcamento = []
// contador = 0
// criarProjeto()
// let opcao = prompt("insira R Receita ou D Despesa:")
// let valor = parseFloat(prompt("Insira um valor:"))
// let nome = prompt("insira o nome do projeto")
// analizeProjeto(nome, valor, opcao)
// function criarProjeto() {
//     projeto[contador] = prompt("insira o nome do projeto:")
//     orcamento[contador] = parseFloat(prompt("Insira o valor do orçamento:"))
//     contador++
// }
// function analizeProjeto(nomeParametro, valorParametro, despesaParametro) {
//     for (let index = 0; index < contador; index++) {
//         if (nomeParametro == projeto[index]) {
//             console.log(projeto[index])
//             if (despesaParametro == "R") {
//                 orcamento[index] = orcamento[index] + valorParametro
//             } else if (despesaParametro == "D") {
//                 orcamento[index] = orcamento[index] - valorParametro
//             }
//             console.log(projeto[index], orcamento[index])
//         }
//     }
// }
let salario = []
let numeroFilhos = []
let contador = 0
let continuar = 0

while (continuar != 6) {
    continuar = operacaoSolicitada()
    if (continuar == 1) {
        coletarDados()
        exibirCadatro()
    } else if (continuar == 2) {
        console.log(mediaSalario())
    } else if (continuar == 3) {
        console.log(mediaFilhos())
    } else if (continuar == 4) {
        console.log(maiorSalario())
    } else if (continuar == 5) {
        console.log(porcentagemAte1500(), "%")
    } else {
        console.log("seção encerrada!")
    }
}
function coletarDados() {
    salario[contador] = parseFloat(prompt("insira o valor do salário:"))
    numeroFilhos[contador] = parseInt(prompt("insira o numero de filhos"))
    contador++
}
function operacaoSolicitada() {
    return prompt("Deseja continuar? (1) Cadastro (2) Média salário (3) Média filhos (4) Maior salario (5) % de pessoas c/ salario até 1500 (6) Encerrar (7) Encerrar")
}
function mediaSalario() {
    let soma = 0
    let media = 0
    for (let index = 0; index < contador; index++) {
        soma = soma + salario[index]
    }
    media = soma / contador
    return media
}
function mediaFilhos() {
    let soma = 0
    let media = 0
    for (let index = 0; index < contador; index++) {
        soma = soma + numeroFilhos[index]
    }
    media = soma / contador
    return media
}
function maiorSalario() {
    let salarioMaior = 0
    salario.forEach(salario => {
        if (salarioMaior < salario) {
            salarioMaior = salario
        }
    })
    return salarioMaior
}
function porcentagemAte1500() {
    let numeropessoas = 0
    salario.forEach(salario => {
        if (salario <= 1500) {
            numeropessoas++
        }
    })
    return (numeropessoas / salario.length) * 100
}

function exibirCadatro() {
    for (var index = 0; index < contador; index++) {
        console.log(salario[index], numeroFilhos[index])
    }
}
const leia = require("prompt-sync")()

let opcao=""
let opcaoVetor=""
let opcaoSOL=""
let opcaoSERV=""
let opcao2 = ""
let doacao = ""

let cod = ['C1','C2','C3']
let serviço = ["resgate de animais", "consulta veterinaria", "vacinação gratuita"]
let valor = [100.00, 55.00, 0.0]
let estoque = [0,0,0]

//primeiro menu
while(opcao != "2"){
    opcaoVetor=""
    console.log("ONG ONPA\n")
    console.log("1 - OPÇÕES\n2 - SAIR")
    opcao = leia("Digite o numero da opcão desejada : ")
    if(opcao=="1"){
        while(opcaoVetor!=4){
            console.log("Menu de opções")
            console.log("1 - Mostra serviços")
            console.log("2 - Mostrar carrinho")
            console.log("3 - Faça uma doação")
            console.log("4 - sair")
            opcaoVetor=leia("Digite a opção desejada: ");
            if(opcaoVetor=="1"){
                console.log("COD\tDESCRICAO\t\tVALOR")
                for (let x = 0; x<cod.length; x++){
                    console.log(cod[x]+"\t"+serviço[x]+"\t"+valor[x])
                }

                console.log("gostaria de solicitar algum serviço? S/N")
                opcaoSOL= leia("Digite a opção desejada:")
                if(opcaoSOL=="S"){
                    console.log("qual serviço gostaria de solicitar?")
                    opcaoSERV= leia("digite o codigo do serviço desejado :")
                        for(let x=0; x<serviço.length; x++){
                        if(opcaoSERV==cod[x]){
                            console.log("PRODUTO "+ opcaoSERV+ " SELECIONADO!")
                            opcao2 = leia("VOCÊ QUER COMPRAR MAIS UM SERVICO?S/N")
                            while(opcao2 == "S"){
                                console.log("qual serviço gostaria de solicitar?")
                                opcaoSERV= leia("digite o codigo do serviço desejado :")
                                    for(let x=0; x<serviço.length; x++){
                                    if(opcaoSERV==cod[x]){
                                        console.log("PRODUTO "+ opcaoSERV+ " SELECIONADO!")
                                        opcao2 = leia("VOCÊ QUER COMPRAR MAIS UM SERVICO? S/N :")
                            }
                        }            }
                    }
        
                }
            }
        }
            else if(opcaoVetor=="2"){
                
                console.log("----------------------------------------------------")
                console.log("CARRINHO...")
                
                console.log("CODIGO\tSERVIÇO\t\tVALOR")
                console.log(cod[x]+"\t"+serviço[x]+"\t"+valor[x])

        }

        else if(opcaoVetor == "3"){
            doacao = leia ("Qual valor você gostaria de doar? 10.00 20.00 30.00 40.00 50.00 :")
            console.log("Obrigado por sua doação!!")
        }
    }

    
}
    }

            
        
    

console.log("\nObrigado por utilizar nossos serviços!")
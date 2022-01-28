                                                     //LIMPANDO O CONSOLE E SETANDO O PROMPT
                                         //PEÇO DESCULPAS MAIS ISSO FOI O MENOS CONFUSO QUE CONSEGUI DEIXARKKJK


console.clear()
const prompt = require('prompt-sync')()

                                                    // COMEÇO DO CODIGO CONTANDO COMO JOGAR E SETANDO VARIAVEIS NECESSARIAS

do{
    console.log(`Seja bem vindo(a) ao jogo, Você pode escolher os elementos usados, o 1º elemento (pedra) escolhido ganha do 3º(tesoura),
    o 2º ellemento (papel) escolhido ganha do 1º(pedra), e o 3º elemento ()tesoura ganha do 2º(papel)   obs:(Caso a escolha seja invalida, a rodada sera desconsiderada...)`)

    let escolhaComputador = Math.random();

    let vitoriaPc = 0
    let vitoriaJogador = 0

    console.log()

    var pedra = prompt("Escolha o 1º termo (pedra) : ") 
    var papel = prompt("Escolha o 2º termo (papel) : ") 
    var tesoura = prompt("Escolha o 3º termo (tesoura) : ") 
    
    console.log()

                                                //DANDO LOOPING NA QUANTIDADE DE RODADAS DESEJADAS

    let rodadas = prompt("Quantas rodadas deseja jogar? ")

    for (let index = 0; index < rodadas; index++) {

        let escolhaUsuario = prompt("Qual deseja escolher? ")

                                                //VERIFICAÇÃO SE OS PARAMETROS ESTAO CERTOS

        if(escolhaUsuario == pedra || escolhaUsuario == tesoura || escolhaUsuario == papel){

            if (escolhaComputador < 0.34){

                escolhaComputador = pedra;

            }else if(escolhaComputador <= 0.67){
                
                escolhaComputador = papel;
                
            }else {
                
                escolhaComputador = tesoura;
                
            }

                                            //VERIFICANDO QUEM GANHOU A RODADA

                if (escolhaComputador == escolhaUsuario){
                    console.log(`Ambos escolheram ${escolhaComputador} e houve um empate.`)
                    console.log()
                }else if(escolhaComputador == "pedra"){
                    if(escolhaUsuario == "papel"){
                        console.log(`O computador escolheu ${escolhaComputador}, e você ganhou`)
                        console.log()
                        vitoriaJogador++
                    }else{
                        console.log(`O computador escolheu ${escolhaComputador}, e você perdeu`)
                        console.log()
                        vitoriaPc++
                    }
                }else if(escolhaComputador == "tesoura"){
                    if(escolhaUsuario == "papel"){
                        console.log(`O computador escolheu ${escolhaComputador}, e você perdeu`)
                        console.log()
                        vitoriaPc++
                    }else{
                        console.log(`O computador escolheu ${escolhaComputador}, e você ganhou`)
                        console.log()
                        vitoriaJogador++
                    }
                }else{
                    if(escolhaUsuario == "tesoura"){
                        console.log(`O computador escolheu ${escolhaComputador}, e você ganhou`)
                        console.log()
                        vitoriaJogador++
                    }else{
                        console.log(`O computador escolheu ${escolhaComputador}, e você perdeu`)
                        console.log()
                        vitoriaPc++
                    }
                }
            
        }else{
            console.log("Resposta Invalida...")

        }                                       //CONTADOR DE VITORIAS COM RESULTADO

    }if (vitoriaJogador > vitoriaPc){
        console.log(`O computador ganhou ${vitoriaPc} rodadas, e Você foi campeão com ${vitoriaJogador} rodadas vencidas...`)
        console.log()
    }else if(vitoriaJogador < vitoriaPc){
        console.log(`Você ganhou ${vitoriaJogador} rodadas, e o computador foi campeão com ${vitoriaPc} rodadas vencidas...`)
        console.log()
    }else{
        console.log(`Hove um empate em ambas rodadas!`)
        vitoriaPc++
    }
    var continuar = prompt("Deseja continuar jogando? ")
    } while ( continuar == "sim")

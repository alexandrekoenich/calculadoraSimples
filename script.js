
function outcome() {
    //vai puxar os valores do documento
    let num1 = Number(document.getElementById('num-one').value) //vai adicionar um atributo, o valor dela seja puxado do valor que foi digitado
    let num2 = Number(document.getElementById('num-two').value)//necessário dizer que se trata de um Number para nao ser tratado como string
    let total = 0

    if (document.getElementById('box1').checked)
    //vai vereficar se o box1 está selecionado com o .checked
        total = num1 + num2

    else if (document.getElementById('box2').checked)
        total = num1 - num2

    else if (document.getElementById('box3').checked)
        total = num1 * num2

    else 
        total = num1 / num2
    
    document.getElementById('resultado').innerHTML = 'Resultado é: '+ (total)
    //vai puxar a id resultado e com o innerHTML vai imprimir na tela a variavel total
}

var visor = document.getElementById("answer")
var soma = document.getElementById("plus")
var subtrair = document.getElementById("minus")
var multi = document.getElementById("multi")
var divisao = document.getElementById("divide")
var igual = document.getElementById("equals")

var zero = document.getElementById("zero")
var um = document.getElementById("one")
var dois = document.getElementById("two")
var tres = document.getElementById("three")
var quatro = document.getElementById("four")
var cinco = document.getElementById("five")
var seis = document.getElementById("six")
var sete = document.getElementById("seven")
var oito = document.getElementById("eight")
var nove = document.getElementById("nine")

var ponto = document.getElementById("dot")
var limpar = document.getElementById("clear")

var nums = operador = ""

var calculo;
var cont_op = 0
var cont_loop = 0
var num1 = num2 = 0

var can_show = false


/*1 - Aqui a Digitação dos Números */
zero.onclick = function addZero(){
    visor.innerText += "0"
    nums += "0"
}
um.onclick = function addUm(){
    visor.innerText += "1"
    nums += "1"
}
dois.onclick = function addDois(){
    visor.innerText += "2"
    nums += "2"
}
tres.onclick = function addTres(){
    visor.innerText += "3"
    nums += "3"
}
quatro.onclick = function addQuatro(){
    visor.innerText += "4"
    nums += "4"
}
cinco.onclick = function addCinco(){
    visor.innerText += "5"
    nums += "5"
}
seis.onclick = function addSeis(){
    visor.innerText += "6"
    nums += "6"
}
sete.onclick = function addSete(){
    visor.innerText += "7"
    nums += "7"
}
oito.onclick = function addOito(){
    visor.innerText += "8"
    nums += "8"
}
nove.onclick = function addNove(){
    visor.innerText += "9"
    nums += "9"
}
ponto.onclick = function addPonto(){
    visor.innerText += "."
    nums += "."
}
soma.onclick = function addSoma(){
    visor.innerText += " +" + " "
    operador += "soma"
    cont_op += 1
    separarNumeros()
}
subtrair.onclick = function addSub(){
    visor.innerText += " -" + " "
    operador += "sub"
    cont_op += 1
    separarNumeros()
}
multi.onclick = function addMulti(){
    visor.innerText += " x" + " "
    operador += "multi"
    cont_op += 1
    separarNumeros()
}
divisao.onclick = function addDivisao(){
    visor.innerText += " /" + " "
    operador += "div"
    cont_op += 1
    separarNumeros()
}

limpar.onclick = function limparVisor(){
    visor.innerText = ""
    calculo = 0
}

igual.onclick = function retornarResultado(){
    cont_op += 1
    can_show = true
    separarNumeros()
}

/* Separando os valores para fazer o Cálculo */
function separarNumeros(){
    console.log(operador)
    if (cont_op == 1){
        num1 = Number(nums)
        nums = ""
    } else if (cont_op == 2) {
        num2 = Number(nums)
        nums = ""
        efetuarCalculo()
        cont_op -= 1
    }

    if (can_show == true){
        visor.innerText = String(calculo)
        cont_op = 0
        can_show = false
    }
}


/* Realizando os Cálculos de forma ecoômica */
function efetuarCalculo(){
    if (operador.search("soma") == 0){
        if (cont_loop == 0){
            calculo = num1 + num2
        } else {
            calculo += num2
        }
        cont_loop += 1
        operador = operador.replace("soma", "")

    } else if (operador.search("sub") == 0){
        if (cont_loop == 0){
            calculo = num1 - num2
        } else {
            calculo -= num2
        }
        cont_loop += 1
        operador = operador.replace("sub", "")

    } else if (operador.search("multi") == 0){
        if (cont_loop == 0){
            calculo = num1 * num2
        } else {
            calculo *= num2
        }
        cont_loop += 1
        operador = operador.replace("multi", "")

    } else if (operador.search("div") == 0){
        if (cont_loop == 0){
            calculo = num1 / num2
        } else {
            calculo /= num2
        }
        cont_loop += 1
        operador = operador.replace("div", "")
    }
}
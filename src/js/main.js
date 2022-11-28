function alerta(){
  swal("Cartão cadastrado com sucesso", "","success", {
    button: "Encerrar",      
  });
}
    
const titular = document.getElementById("nome-completo");
const numero = document.getElementById("numero-cartao");
const validade = Array.from(document.querySelectorAll(".validade"));
const codigo = document.getElementById("codigo-cartao");

const nomeNoCartao = document.querySelector(".cartao__frente--nome");
const numeroNoCartao = document.querySelector(".cartao__frente--numero");
const validadeMes = document.querySelector(".cartao__frente--mes");
const validadeAno = document.querySelector(".cartao__frente--ano");
const codigoNoCartao = document.querySelector(".cartao__fundo--codigo")
const form = document.getElementById("formulario");
const msgErroValidade = document.getElementById("validade-mensagem-erro");

function inputNome() {
    nomeNoCartao.innerHTML = titular.value;
    if (nomeNoCartao.innerHTML == "") {
        nomeNoCartao.innerHTML = "Seu Nome";
    }
}

function inputNumeroCartao() {
    let inputNumeroCartao = numero.value;

    let numeroFormatado = inputNumeroCartao.replace(/[^\d]/g, "");
    numeroFormatado = numeroFormatado.substring(0, 16);

    let secaoNumero = numeroFormatado.match(/\d{1,4}/g);
    if (secaoNumero !== null) {
      numeroFormatado = secaoNumero.join(" ");
    }

    if (inputNumeroCartao !== numeroFormatado) {
      numero.value = numeroFormatado;
    }
    numeroNoCartao.innerHTML = numero.value;
    if (numero.value === "") {
      numeroNoCartao.innerHTML = "0000 0000 0000 0000";
    }
}

function inputMes() {
    let mesFormatado = validade[0].value;
    mesFormatado = mesFormatado.substring(0, 2);
    validade[0].value = mesFormatado;
    if (validade[0].value === "") {
      validadeMes.innerHTML = "MM";
    } else {
      validadeMes.innerHTML = validade[0].value;
    }
}

function inputAno() {
    let anoFormatado = validade[1].value;
    anoFormatado = anoFormatado.substring(0, 2);
    validade[1].value = anoFormatado;
    if (validade[1].value === "") {
      validadeAno.innerHTML = "AA";
    } else {
      validadeAno.innerHTML = validade[1].value;
    }
}

function inputCodigo() {
    let codigoFormatado = codigo.value;
  
    codigoFormatado = codigoFormatado.substring(0, 3);
    codigo.value = codigoFormatado;
    if (codigo.value === "") {
      codigoNoCartao.innerHTML = "XXX";
    } else {
      codigoNoCartao.innerHTML = codigo.value;
    }
}

// <<<<<<<<<<< VALIDAÇÕES
function checkInputs(inputs) {
  var filled = true;
  
  inputs.forEach(function(input) {
      
    if(input.value === "") {
        filled = false;
    }
  
  });
  
  return filled;
  
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
inputs.forEach(function(input) {
    
  input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });

})

enviar.addEventListener("click", function () {
  checkInputs(inputs);
  if (checkInputs(inputs) == false) {
    event.preventDefault();
  } else {
    event.preventDefault();

    alerta();

    titular.value = ""
    numero.value = ""
    validade[0].value = ""
    validade[1].value = ""
    codigo.value = ""

    nomeNoCartao.innerHTML = "Seu Nome"
    numeroNoCartao.innerHTML = "0000 0000 0000 0000"
    validadeMes.innerHTML = "MM"
    validadeAno.innerHTML = "AA"
    codigoNoCartao.innerHTML = "000"
  }

})
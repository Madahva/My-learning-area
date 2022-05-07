function sacarImg(){
	var elem = document.getElementsByClassName("output-section__no-msg");
	elem[0].parentNode.removeChild(elem[0]);
  document.getElementsByTagName("h4")[0].innerText = ("Su texto es:");
}

function encrypt(){
    const textoInsertado = document.getElementsByTagName("textarea")[0].value;
    const textoEncriptado = textoInsertado.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    var error = validar();
    if(error == false && textoInsertado.length != 0){
      document.getElementById("output-section__result").innerText = textoEncriptado;  
      document.getElementById("output-section__copy-text").innerText = ("");
	  sacarImg();
	  sacarImg();
    }
 }

function decrypt(){
    const textoInsertado = document.getElementsByTagName("textarea")[0].value;
    const textoDesencriptado= textoInsertado.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    if(textoInsertado!=textoDesencriptado){
      document.getElementById("output-section__result").innerText = textoDesencriptado;
      document.getElementById("output-section__copy-text").innerText = (""); 
	  sacarImg();
	  sacarImg();
    }
}

 function copy() {
    var copyText = document.querySelector("#output-section__result");
    copyText.disabled = false;
    copyText.select();
    document.execCommand("copy");
    copyText.disabled = true;
    if(copyText.value) document.getElementById("output-section__copy-text").innerText = ("Texto copiado!");
  }
  document.querySelector("#output-section__copy-btn").addEventListener("click", copy);

const textoInsertado = document.getElementsByTagName("textarea")[0];
textoInsertado.addEventListener('keyup', validar);
textoInsertado.addEventListener('blur', validar);

function validar(){
   array = textoInsertado.value.split('');
   var error = false;
   for(var i = 0; i < array.length; i++){
       if (array[i].codePointAt(0) != 32 && (array[i].codePointAt(0) < 97 || array[i].codePointAt(0) > 122)){
           error = true;
           errorMsg();
           break;
       } else{
         var print_error = document.querySelector("#input-section__error-msg");
         print_error.textContent = "";
       }
   }
   return error;
}

function errorMsg() {
   var error = document.querySelector("#input-section__error-msg");
   error.textContent = "ERROR: ha ingresado un caracter inválido.";
}
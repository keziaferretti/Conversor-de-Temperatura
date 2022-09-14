function converter() {
  var conversao = parseInt(document.getElementById("celsius").value);
  var convertido = (conversao * 9) / 5 + 32;
  var elementoResultado = document.getElementById("resultado");
  
 var resultado = "A temperatura é de: " + convertido;elementoResultado.innerHTML = resultado + "F°";
  
}


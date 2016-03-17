// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  var dolar = $("#dolar").text();
  dolar = "3.59";

  var array ={ "Alfabeto": [
    { "letra": "&", "valor": "0"},
    { "letra": "a", "valor" : "1" },
    { "letra": "b", "valor" : "2" },
    { "letra": "c", "valor" : "3" },
    { "letra": "d", "valor" : "4" },
    { "letra": "e", "valor" : "5" },
    { "letra": "f", "valor" : "6" },
    { "letra": "g", "valor" : "7" },
    { "letra": "h", "valor" : "8" },
    { "letra": "i", "valor" : "9" },
    { "letra": "j", "valor" : "10" },
    { "letra": "k", "valor" : "11" },
    { "letra": "l", "valor" : "12" },
    { "letra": "m", "valor" : "13" },
    { "letra": "n", "valor" : "14" },
    { "letra": "o", "valor" : "15" },
    { "letra": "p", "valor" : "16" },
    { "letra": "q", "valor" : "17" },
    { "letra": "r", "valor" : "18" },
    { "letra": "s", "valor" : "19" },
    { "letra": "t", "valor" : "20" },
    { "letra": "u", "valor" : "21" },
    { "letra": "v", "valor" : "22" },
    { "letra": "w", "valor" : "23" },
    { "letra": "x", "valor" : "24" },
    { "letra": "y", "valor" : "25" },
    { "letra": "z", "valor" : "26" },
    { "letra": " ", "valor" : "27" },
    { "letra": "A", "valor" : "28" },
    { "letra": "B", "valor" : "29" },
    { "letra": "C", "valor" : "30" },
    { "letra": "D", "valor" : "31" },
    { "letra": "E", "valor" : "32" },
    { "letra": "F", "valor" : "33" },
    { "letra": "G", "valor" : "34" },
    { "letra": "H", "valor" : "35" },
    { "letra": "I", "valor" : "36" },
    { "letra": "J", "valor" : "37" },
    { "letra": "K", "valor" : "38" },
    { "letra": "L", "valor" : "39" },
    { "letra": "M", "valor" : "40" },
    { "letra": "N", "valor" : "41" },
    { "letra": "O", "valor" : "42" },
    { "letra": "P", "valor" : "43" },
    { "letra": "Q", "valor" : "44" },
    { "letra": "R", "valor" : "45" },
    { "letra": "S", "valor" : "46" },
    { "letra": "T", "valor" : "47" },
    { "letra": "U", "valor" : "48" },
    { "letra": "V", "valor" : "49" },
    { "letra": "W", "valor" : "50" },
    { "letra": "X", "valor" : "51" },
    { "letra": "Y", "valor" : "52" },
    { "letra": "Z", "valor" : "53" },
    { "letra": "ç", "valor" : "54" },
    { "letra": "Ç", "valor" : "55" },
    { "letra": "á", "valor" : "56" },
    { "letra": "à", "valor" : "57" },
    { "letra": "â", "valor" : "58" },
    { "letra": "ã", "valor" : "59" },
    { "letra": "Á", "valor" : "60" },
    { "letra": "À", "valor" : "61" },
    { "letra": "Â", "valor" : "62" },
    { "letra": "Ã", "valor" : "61" },
    { "letra": "é", "valor" : "62" },
    { "letra": "è", "valor" : "63" },
    { "letra": "ê", "valor" : "64" },
    { "letra": "ẽ", "valor" : "65" },
    { "letra": "É", "valor" : "66" },
    { "letra": "È", "valor" : "67" },
    { "letra": "Ê", "valor" : "68" },
    { "letra": "Ẽ", "valor" : "69" },
    { "letra": "í", "valor" : "70" },
    { "letra": "í", "valor" : "71" },
    { "letra": "Í", "valor" : "72" },
    { "letra": "Ì", "valor" : "73" },
    { "letra": "ó", "valor" : "74" },
    { "letra": "ò", "valor" : "75" },
    { "letra": "ô", "valor" : "76" },
    { "letra": "õ", "valor" : "77" },
    { "letra": "Ó", "valor" : "78" },
    { "letra": "Ò", "valor" : "79" },
    { "letra": "Ô", "valor" : "80" },
    { "letra": "Õ", "valor" : "81" },
    { "letra": "!", "valor" : "82" },
    { "letra": "?", "valor" : "83" }

  ]};

  var criptografiaDolar = ""; // VARIAVEL DO DOLAR CRIPTOGRAFADO
  var criptografiaTexto; // VARIAVEL DO TEXTO CRIPTOGRAFADO
  var texto = ""; // VARIAVEL DO TEXTO COMUM

  dolar = dolar.replace(".",""); // RETIRANDO O . DO DOLAR

  // CRIPTOGRAFANDO DOLAR
  for(var i = 0; i < dolar.length; i++)
  {
    var numero = dolar.charAt(i);
    for(var j = 1; j < array.Alfabeto.length; j++)
    {
      if(numero == array.Alfabeto[j].valor)
      {
        criptografiaDolar += array.Alfabeto[j].letra;
      }
    }
  }
  // criptografiaDolar -> é a variavel que guarda a criptografia do dolar;

  // RECEBENDO TEXTO
  $(".criptografar").click(function(){
    criptografiaTexto = criptografiaDolar;
    texto = $(".texto").val();

    for(var i = 0; i < texto.length; i++)
    {
      for(var j = 0; j < array.Alfabeto.length; j++)
      {
        if(texto.charAt(i) == array.Alfabeto[j].letra)
        {
          var letraValor = parseInt(array.Alfabeto[j].valor);
          var criptografia = ( letraValor + parseInt(dolar.charAt(0)) ) * parseInt(dolar.charAt(1)) / parseInt(dolar.charAt(2)) ;
          criptografia = criptografia.toString();

          var quantidade = parseInt(criptografia.length);
          var numeroLetra = array.Alfabeto[quantidade].letra;

          criptografiaTexto += numeroLetra + criptografia;
        }
      }
    }

    $(".criptografia").val(criptografiaTexto);

  });

  $(".descriptografar").click(function(){
    var criptografia = $(".criptografia").val();

    var dolarCriptografia = criptografia.substring(0,3);

    criptografia = criptografia.substring(3);

    var dolarDescriptografia = "";

    // Descriptografando o dolar
    for(var i = 0; i < dolarCriptografia.length; i++)
    {
      var letra = dolarCriptografia.charAt(i);
      for(var j = 0; j < array.Alfabeto.length; j++)
      {
        if(letra == array.Alfabeto[j].letra)
        {
          dolarDescriptografia+= array.Alfabeto[j].valor;
        }
      }
    }

    var descriptografia = "";
    for(var i = 0; i < criptografia.length; i++)
    {
      var quantidade = criptografia.charAt(0);
      for(var j = 0; j < array.Alfabeto.length; j++)
      {
        if(quantidade == array.Alfabeto[j].letra)
        {
          quantidade = array.Alfabeto[j].valor;
          criptografia = criptografia.substring(1);
          var numeroLetra = ( parseFloat(criptografia.substring(0, quantidade)) * parseInt(dolar.charAt(2)) ) / parseInt(dolar.charAt(1)) - parseInt(dolar.charAt(0));
          criptografia = criptografia.substring(quantidade);

          for(var n = 0; n < array.Alfabeto.length; n++)
          {
            if(numeroLetra == array.Alfabeto[n].valor)
            {
              var letraReal = array.Alfabeto[n].letra;
            }
          }

          descriptografia += letraReal;
        }
      }
    }

    $(".texto").val(descriptografia);

  });

});
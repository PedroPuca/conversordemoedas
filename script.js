function Converter() {
  var valorElemento = document.getElementById("valor");
  if (valorElemento.value == "") {
    valorConvertidoReal.innerHTML = "Você não inseriu um  valor";
  } else {
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5.04;
    var valorEmBitcoin = valorEmDolarNumerico * 0.000024;

    var elementoValorConvertido = document.getElementById(
      "valorConvertidoReal"
    );
    var valorConvertido = "O resultado em real é R$" + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;

    var elementoValorConvertidoBitcoin = document.getElementById(
      "valorConvertidoBitcoin"
    );
    var valorConvertidoBitcoin =
      "O resultado em Bitcoin é BTC " + valorEmBitcoin;
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
}
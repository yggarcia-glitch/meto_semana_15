function ejercicio10() {
  let binaryNumber = [0, 1, 0, 1];
  let decimal = 0;
  let valor = 1;
  for (let i = binaryNumber.length - 1; i >= 0; i--) {
    decimal += binaryNumber[i] * valor;
    valor *= 2;
  }
  alert("Decimal: " + decimal);
}
ejercicio10();
function ejercicio01() {
  let nums = [7, 4, 0, 9, 7, 6, 3, 8];
  let contador = 0;
  for (let i = 0; nums[i] !== undefined; i++) {
    contador++;
  }
  alert("Tamaño del array: " + contador);
}
ejercicio01();
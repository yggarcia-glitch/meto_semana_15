function ejercicio06() {
  let name = ['a', 'o', 'l', 'h'];
  let aux = name[0];
  name[0] = name[name.length - 1];
  name[name.length - 1] = aux;
  alert(name);
}
ejercicio06();
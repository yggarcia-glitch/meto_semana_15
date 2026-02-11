function ejercicio14() {
  let nums = [1, 2, 3, 2, 1];
  let esPal = true;
  for (let i = 0; i < nums.length / 2; i++) {
    if (nums[i] !== nums[nums.length - 1 - i]) {
      esPal = false;
    }
  }
  alert(esPal ? "Es palíndrome" : "No es palíndrome");
}
ejercicio14();
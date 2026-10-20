const calcularIMC = (peso, altura) => {
  if (peso <= 0 || altura <= 0) {
    console.error("Los datos deben ser mayores a 0");
    return null;
  }
  return peso / altura ** 2;
};
const clasificarIMC = (imc) => {
  if (imc < 18.5) {
    return "Bajo de peso";
  } else if (imc < 25) {
    return "Normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
};

console.log(clasificarIMC(calcularIMC(65, 1.63)));
console.log(clasificarIMC(calcularIMC(58, 1.65)));
console.log(clasificarIMC(calcularIMC(50, 2)));

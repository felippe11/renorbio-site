export default {
  numbers: [
    "zero",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
  ],
  operator: ["+", "-"],
  gerarExpressao() {
    return `${this.getRandomInt(1, 20)} ${
      this.operator[this.getRandomInt(0, 1)]
    } ${this.getRandomInt(1, 30)} ${this.operator[this.getRandomInt(0, 1)]} ${
      this.numbers[this.getRandomInt(0, 9)]
    } = `;
  },
  validarExpressao(expressao, valor) {
    let primeiraParte = 0;
    let segundaParte = 0;
    expressao = expressao.split(" = ");
    expressao = expressao[0].split(" ");
    if (expressao[1] === "+") {
      primeiraParte = parseInt(expressao[0]) + parseInt(expressao[2]);
    } else {
      primeiraParte = parseInt(expressao[0]) - parseInt(expressao[2]);
    }
    if (expressao[3] === "+") {
      segundaParte =
        parseInt(primeiraParte) + parseInt(this.numbers.indexOf(expressao[4]));
    } else {
      segundaParte =
        parseInt(primeiraParte) - parseInt(this.numbers.indexOf(expressao[4]));
    }
    return parseInt(segundaParte) === parseInt(valor);
  },
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

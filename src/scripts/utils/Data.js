export default {
  dataFormatada(dt) {
    const data = new Date(dt);
    const dia = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
    const mes =
      data.getMonth() + 1 < 10
        ? `0${data.getMonth() + 1}`
        : data.getMonth() + 1;
    const ano = data.getFullYear();
    return [dia, mes, ano].join("/");
  },
  dataInversa(dt) {
    const data = dt;
    const reverse = data.split("-").reverse().join("/");
    return reverse;
  },
  dataTratada(dt) {
    const data = dt.substring(0, 10);
    const reverse = data.split("-").reverse().join("/");
    return reverse;
  },
};

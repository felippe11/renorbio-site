export default {
  dataFormatada(dt) {
    const data = new Date(dt);
    const dia = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
    const mes =
      data.getMonth() + 1 < 10
        ? `0${data.getMonth() + 1}`
        : data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours() === 0 ? "00" : data.getHours();
    const minuto = data.getMinutes() === 0 ? "00" : data.getMinutes();
    return `${[dia, mes, ano].join("/")} ${[hora, minuto].join(":")}`;
  },
  dataWPFormatada(dt) {
    const data = dt.split("T")[0].split("-");
    const hora = dt.split("T")[1].split(":");
    return `${[data[2], data[1], data[0]].join("/")} ${[hora[0], hora[1]].join(
      ":"
    )}`;
  },
};

export default {
  dataFormatada(dt) {
    const data = new Date(dt);
    const hora = data.getHours() === 0 ? "00" : data.getHours();
    const minuto = data.getMinutes() === 0 ? "00" : data.getMinutes();
    return [hora, minuto].join(":");
  },
};

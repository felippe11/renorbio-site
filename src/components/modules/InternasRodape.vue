<template lang="pug">
  .footer
    voltar-internas
    redes-sociais
</template>

<style lang="scss" scoped>

  .footer {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @include media("<tablet") {
    .footer {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

</style>

<script>
  import RedesSociais from '@BASICS/RedesSociais';
  import VoltarInternas from '@BASICS/VoltarInternas';

  export default {
    components: {
      RedesSociais,
      VoltarInternas
    }
  };
</script>

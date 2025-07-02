<template lang="pug">
  pagina
    vitrine-tecnologica(slot="principal")
</template>

<style lang="scss" scoped>

</style>

<script>
import VitrineTecnologica from '@MODULES/VitrineTecnologica';
import Pagina from '@BASICS/Pagina';

export default {
  components: {
    VitrineTecnologica,
    Pagina,
  }
};
</script>

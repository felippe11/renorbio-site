<template lang="pug">
  pagina
    breadcrumb(:itens="breadcrumb" slot="breadcrumb")
    vitrine-tecnologica(slot="principal")
</template>

<style lang="scss" scoped>

</style>

<script>
import Breadcrumb from '@MODULES/Breadcrumb';
import VitrineTecnologica from '@MODULES/VitrineTecnologica';
import Pagina from '@BASICS/Pagina';

export default {
  components: {
    Breadcrumb,
    VitrineTecnologica,
    Pagina,
  },
  data() {
    return {
      breadcrumb: [
        { nome: 'Vitrine Tecnológica' }
      ]
    };
  }
};
</script>

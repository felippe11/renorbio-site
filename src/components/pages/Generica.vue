<template lang="pug">
  generica(slot="principal")
</template>

<style lang="scss" scoped>

</style>

<script>

import Generica from '@MODULES/Generica';
import Pagina from '@BASICS/Pagina';

  export default {
    components: {
      Generica,
      Pagina,
    }
  };
</script>

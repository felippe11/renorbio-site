<template lang="pug">
  pagina
    extra(slot="principal")
</template>

<style lang="scss" scoped>

</style>

<script>

import Extra from '@MODULES/Extra';
import Pagina from '@BASICS/Pagina';

  export default {
    components: {
      Extra,
      Pagina,
    }
  };
</script>

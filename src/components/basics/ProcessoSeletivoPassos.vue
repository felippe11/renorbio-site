<template lang="pug">
  span.passos: slot
</template>

<script>
export default {
};
</script>

<style lang="scss">

  .passos {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    color: $cor-azul-1;
    margin-bottom: 20px;
    display: block;
  }

</style>

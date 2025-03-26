<template lang="pug">
  #bacKToTop
    i.fa.fa-chevron-up(aria-hidden="true" title="Ir para o topo da página")
</template>

<script>
</script>

<style lang="scss" scoped>
  #bacKToTop{
    cursor: pointer;
    //background: '\f077',transparentize($cor-cinza, .4);  //$cor-cinza 40%
    background: transparentize($cor-cinza, .6);
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    display: flex;
    padding-bottom: 7px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    color: transparentize($cor-branco, .2);

    i{
      font-size: 30px;
    }
  }
</style>

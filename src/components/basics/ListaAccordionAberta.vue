<template lang="pug">
  ul
    item-lista-accordion(@toggleList="toggleIsOpened" :uid="uid" v-for="(iten, index) in itens" :manualIsOpened="true" :index="index" :key="iten.link")
      span(slot="principal") {{iten.name}}
      li.iten-list(slot="sub" v-for="(subiten, indexSub) in iten.subitens" :key="indexSub") {{subiten}}
</template>

<script>
  import ItemListaAccordion from '@BASICS/ItemListaAccordion';

  export default {
    name: 'ListaAccordionAberta',
    components: {ItemListaAccordion},
    props: {
      itens: {
        default: () => [
            {name: 'Bionegócios e Marco Legais', subitens: ['subiten 1', 'subiten 2', 'subiten 3']},
            {name: 'Biotecnologia em agropecuária', subitens: ['subiten 1', 'subiten 2', 'subiten 3']},
            {name: 'Biotecnologia em em recursos naturais', subitens: ['subiten 1', 'subiten 2', 'subiten 3']}
          ]
      },
    },
    data() {
      return {
        uid: 0,
        tamanhoItens: this.itens.length
      };
    },
    beforeUpdate() {
      this.tamanhoItens = this.itens.length;
    },
    methods: {
      toggleIsOpened(uid) {
        this.uid = uid;
      }
    }
  };
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
    padding: 0;
    li{
      list-style: none;
    }
  }
  .iten-list{
    margin-top: 10px;
  }
</style>

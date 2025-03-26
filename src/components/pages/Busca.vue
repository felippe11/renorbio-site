<template lang="pug">
  #busca
    .container
      breadcrumb(slot="breadcrumb", :itens="this.breadcrumb")
      titulo Busca
      article
        google-search

</template>

<script>
import Breadcrumb from '@MODULES/Breadcrumb';
import Titulo from '@BASICS/Titulo';
import GoogleSearch from '@BASICS/GoogleSearch';

export default {
  components: {
    Breadcrumb,
    Titulo,
    GoogleSearch
  },
  data() {
    return {
      breadcrumb: [
        { nome: 'Busca'}
      ]
    };
  },
  mounted() {
    this.busca();
  },
  methods: {
    busca() {
      const cx = '003075121585300769612:yrvy6sgju-e';
      const gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = `https://cse.google.com/cse.js?cx=${cx}`;
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    }
  }
};
</script>

<style lang="scss">
article {
  margin-bottom: 30px;
}
</style>

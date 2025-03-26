<template lang="pug">
  #generica(v-if="ready")
    .header(v-if="id == 1 || id == 2")
      h3.titulo.hr(v-html="pagina.titulo")
    .header(v-else)
      h3.titulo.hr O Programa de Doutorado RENORBIO
    .content(v-if="id == 1 || id == 2")
      conteudo(v-html="pagina.corpo")
    .content(v-else)
      h3.titulo(v-html="pagina.titulo")
      conteudo(v-html="pagina.corpo")
</template>

<script>
  import Conteudo from '@BASICS/Artigo';

  import PaginaExtraService from '../../scripts/services/PaginaExtraService';

  import * as config from '../../scripts/config';

  export default {
    components: {
      Conteudo
    },
    data() {
      return {
        pagina: {
          corpo: '',
          titulo: '',
        },
        slug: '',
        id: '',
        ready: false
      };
    },
    head: {
      title() {
        return {
           inner: `${config.SITE_TITLE} - ${this.pagina.titulo}`
         };
       },
       meta: [
         {
           name: 'description', content: config.SITE_DESC, id: 'description'
         }
       ]
     },
    watch: {
      $route(to, from) {
        this.loadPagina(to.params.slug);
      }
    },
    mounted() {
      this.slug = (this.$route.params.slug) ? this.$route.params.slug : '';
      if (this.slug !== '') {
        this.loadPagina(this.slug);
      }
      this.getAsyncData();
    },
    beforeUpdate() {
      this.slug = (this.$route.params.slug) ? this.$route.params.slug : '';
    },
    methods: {
      loadPagina(slug) {
        this.id = this.$route.params.id;
        PaginaExtraService.getPagina(slug)
        .then(paginaDados => {
          this.pagina.titulo = paginaDados.title.rendered;
          this.pagina.corpo = paginaDados.acf.descricao;
          this.ready = true;
        });
        this.ready = false;
      },
      getAsyncData() {
        const self = this;
        window.setTimeout(() => {
          self.titulo = self.titulo;
          self.$emit('updateHead');
        }, 1000);
      }
    }
  };
</script>

<style lang="scss" scoped>

  #generica {
      padding: 0 15px;
  }

  h3.titulo {
    font-size: 16px;
    font-weight: bold;
    margin-top: 0;
  }

  h3.titulo.hr {
    display: block;
    border-bottom: 1px solid $cor-azul-1;
    padding-bottom: 5px;
    margin-bottom: 20px;
    font-size: 18px;
  }

</style>

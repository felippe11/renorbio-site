<template lang="pug">
  .container
    header
      breadcrumb(:itens="this.breadcrumb")
    titulo Documentos
    lista-categorias(v-if="!loading" :itens="documentos")
    .content-loading(v-else v-for="i in 4")
      .documentos.loading-effect
</template>

<style lang="scss" scoped>
  .container{
    padding-bottom: 20px;
  }
  .label-select{
    padding: 6px 0;
  }
</style>

<script>
  import Breadcrumb from '@MODULES/Breadcrumb';
  import Titulo from '@BASICS/Titulo';
  import ListaCategorias from '@BASICS/ListaCategorias';

  import DocumentosService from '../../scripts/services/DocumentosService';

  import * as config from '../../scripts/config';

  export default {
    components: {
      Breadcrumb,
      Titulo,
      ListaCategorias
    },
    data() {
      return {
        breadcrumb: [
          { nome: 'Documentos' }
        ],
        documentos: [],
        loading: true
      };
    },
    head: {
      title() {
        return {
          inner: `${config.SITE_TITLE} - Documentos`
        };
      },
      meta: [
        {
          name: 'description', content: config.SITE_DESC, id: 'description'
        }
      ]
    },
    created() {
      this.getDocumentos();
    },
    methods: {
      getDocumentos() {
        const documentosTratados = [];
        DocumentosService.getCategorias()
          .then(response => {
            for (let i = 0; i < response.data.length; i++) {
              const documentoTratado = {
                name: response.data[i].name,
                id: response.data[i].id
              };
              documentosTratados.push(documentoTratado);
            }
            this.documentos = documentosTratados;
            this.loading = false;
          });
      }
    }
  };
</script>

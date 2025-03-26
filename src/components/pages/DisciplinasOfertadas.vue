<template lang="pug">
  .container
    header
      breadcrumb(:itens="this.breadcrumb")
    titulo Disciplinas ofertadas
    .caixa-selecao-box
      .label-select Estado:
      .caixa-selecao
        select-input(name="area-concentracao" v-model="filter" :itens="optionsInput" :tab="20")
    lista-accordion(:itens="listaFiltrada")
</template>

<style lang="scss" scoped>
  .container{
    padding-bottom: 20px;
  }
  .caixa-selecao-box{
    display: flex;
    .label-select{
      margin-right: 10px;
      padding: 6px 0;
    }
    .caixa-selecao{

      @media screen and (max-width: 425px){
        width: 100%;
      }
    }

    @media screen and (max-width: 425px){
      display: inline;
    }
  }
</style>

<script>
  import Breadcrumb from '@MODULES/Breadcrumb';
  import Titulo from '@BASICS/Titulo';
  import ListaAccordion from '@BASICS/ListaAccordion';
  import SelectInput from '@BASICS/SelectInput';

  import * as config from '../../scripts/config';

  import DisciplinasOfertadasService from '../../scripts/services/DisciplinasOfertadas';

  export default {
    components: {
      Breadcrumb,
      Titulo,
      ListaAccordion,
      SelectInput
    },
    props: {
      tab: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        breadcrumb: [
          { nome: 'Disciplinas ofertadas' }
        ],
        filter: '',
        optionsInput: {
          0: { key: 0, name: 'Mostrar todos' }
        },
        listaItens: [
            {name: 'RN - UFRN', subitens: ['Disciplina 1', 'Disciplina 2', 'Disciplina 3']},
            {name: 'RN - UFERSA', subitens: ['Disciplina 1', 'Disciplina 2', 'Disciplina 3']},
            {name: 'RN - UERN', subitens: ['Disciplina 1', 'Disciplina 2', 'Disciplina 3']},
            {name: 'PB - UFPB', subitens: ['Disciplina 1', 'Disciplina 2', 'Disciplina 3']},
            {name: 'PB - UNIFACEX', subitens: ['Disciplina 1', 'Disciplina 2', 'Disciplina 3']}
        ],
        listaFiltrada: ''
      };
    },
    head: {
      title() {
        return {
           inner: `${config.SITE_TITLE} - Disciplinas ofertadas`
         };
       },
       meta: [
         {
           name: 'description', content: config.SITE_DESC, id: 'description'
         }
       ]
     },
    watch: {
      filter(data) {
        const nameUf = data.name;
        if (nameUf != this.optionsInput[0].name && nameUf != '') {
          this.listaFiltrada = window._.orderBy(window._.filter(this.listaItens, (obj) => (obj.name.substring(0, 2).indexOf(nameUf) != -1)), ['name'], ['asc']);
        } else {
          this.listaFiltrada = window._.orderBy(this.listaItens, ['name'], ['asc']);
        }
      }
    },
    created() {
      this.getDisciplinasOfertadas();
    },
    methods: {
      getDisciplinasOfertadas() {
        const listaFormatada = [];
        DisciplinasOfertadasService.getDisciplinasOfertadas()
          .then(response => {
            let index = 1;
            for (const i in response.data.registers) {
              index++;
              for (const j in response.data.registers[i]) {
                listaFormatada.push({name: `${i} - ${response.data.registers[i][j].institution}`, subitens: response.data.registers[i][j].disciplines});
              }
              this.optionsInput[index] = {key: index, name: i};
              index++;
            }
            this.listaItens = listaFormatada;
            this.listaFiltrada = window._.orderBy(this.listaItens, ['name'], ['asc']);
          });
      }
    }
  };
</script>

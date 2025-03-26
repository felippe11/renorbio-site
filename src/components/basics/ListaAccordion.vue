<template lang="pug">
  ul(v-if="origin == 'labs'")
    item-lista-accordion(@toggleList="toggleIsOpened" :item="item" :uid="uid" v-for="(iten, index) in itens" :manualIsOpened="tamanhoItens == 1" :index="index" :key="iten.name")
      span(slot="principal") {{iten.name}}
      li.iten-list(slot="sub" v-for="(subiten, indexSub) in iten.subitens" :key="indexSub")
        a.lab-link(tabindex="0" @click="show(iten.name, subiten)", @keyup.enter="show(iten.name, subiten)") {{subiten.name}}
        modal-generico(v-if="modal == subiten.name" :titulo="'DADOS GERAIS'", :dados="dados")

  ul(v-else)
    item-lista-accordion(@toggleList="toggleIsOpened" :item="item" :uid="uid" v-for="(iten, index) in itens" :manualIsOpened="tamanhoItens == 1" :index="index" :key="iten.name")
      span(slot="principal") {{iten.name}}
      li.iten-list(slot="sub" v-for="(subiten, indexSub) in iten.subitens" :key="indexSub") {{subiten}}
</template>

<script>
  import ItemListaAccordion from '@BASICS/ItemListaAccordion';
  import ModalGenerico from '@BASICS/ModalGenerico';

  import { EventBus } from '../../scripts/utils/EventBus';

  export default {
    name: 'ListaAccordion',
    components: { ItemListaAccordion, ModalGenerico },
    props: {
      itens: {
        default: () => [
            {name: 'Bionegócios e Marco Legais', subitens: ['subiten 1', 'subiten 2', 'subiten 3']},
            {name: 'Biotecnologia em agropecuária', subitens: ['subiten 1', 'subiten 2', 'subiten 3']},
            {name: 'Biotecnologia em em recursos naturais', subitens: ['subiten 1', 'subiten 2', 'subiten 3']}
          ]
      },
      item: {

      },
      origin: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        uid: 0,
        tamanhoItens: this.itens.length,
        modal: '',
        dados: ''
      };
    },
    beforeUpdate() {
      this.tamanhoItens = this.itens.length;
    },
    created() {
      EventBus.$on('closeModal', () => {
        this.closeModal();
      });
    },
    methods: {
      toggleIsOpened(uid) {
        this.uid = uid;
      },
      closeModal() {
        this.modal = false;
      },
      show(estado, item) {
        this.modal = item.name;
        const dictionary = [
          ['Nome', item.name, 'string'],
          ['Instituição', estado, 'string'],
          ['E-mail', item.email, 'email'],
          ['Página', item.homepage, 'link'],
          ['Telefone', item.phone, 'string'],
          ['Descrição', item.description, 'descricao'],
          ['Responsáveis', item.responsables, 'links', 'CorpoDocente']
        ];
        this.dados = dictionary;
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

      .lab-link {
        color: $cor-cinza !important;
        font-weight: normal !important;
        font-size: 14px !important;

        &:hover,
        &:focus {
          color: $cor-azul-1 !important;
        }

        .fa {
          margin-left: 5px;
        }
      }
    }
  }
  .iten-list{
    margin-top: 10px;
  }
</style>

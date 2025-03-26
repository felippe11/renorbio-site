<template lang="pug">
  ul.hide(class="menu-lang" v-click-outside="closeState")
    li(class="ativo" :class="{'ativo-opened': isOpened}" @click="toggleState" @keyup.enter="toggleState" :tabindex="tab").
      {{langVersao}} #[i(class="fa" v-bind:class="{'fa-angle-down' : isOpened, 'fa-angle-up' : !isOpened }")]
    transition(name="fademenuidiomas")
      li(class="submenu" v-show="isOpened")
        a(v-for="(value, index) in langs" :tabindex="tab" :title="value.descricao" v-if="value.sigla != langVersao") {{value.sigla}}
</template>

<script>

  export default {
    props: {
      tab: {
        type: Number,
        default: 1
      },
      langs: {
        default: () => [{sigla: 'PT', descricao: 'Versão Português'}, {sigla: 'EN', descricao: 'Versão Inglês'}, {sigla: 'ES', descricao: 'Versão Espanhol'}]
      },
      langVersao: {
        default: 'PT'
      }
    },
    data() {
      return {
        isOpened: false
      };
    },
    methods: {
      toggleState() {
        this.isOpened = !this.isOpened;
      },
      closeState() {
        this.isOpened = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  ul.menu-lang {
    box-sizing: border-box;
    width: 45px;
    display: inline-block;
    list-style-type: none;
    padding: 2.5px 6px;
    background: $cor-branco;
    margin-left: 20px;
    border-radius: 5px;

    .ativo {
      font-size: 14px;
      vertical-align: text-bottom;
      cursor: pointer;
      color: $cor-azul-1;
    }

    .ativo-opened{
      color: rgba(40, 139, 180, 0.5) !important; //$cor-azul-1;
    }

    .submenu{
      display: block;
      list-style-type: none;
      position: absolute;
      margin-left: -6px;
      margin-top: -2px;

      a{
        box-sizing: border-box;
        width: 45px;
        color: $cor-azul-1;
        font-size: 14px;
        padding-left: 10px;
        padding-top: 5px;
        background: $cor-branco;
        display: list-item;
        cursor: pointer;
        text-decoration: none;
        text-align: left;

        &:hover{
          color: rgba(40, 139, 180, 0.5) !important;
        }
      }

      :last-child{
        border-radius: 0px 0px 5px 5px;
        padding-bottom: 2.5px;
      }
      :first-child{
        padding-top: 6.5px;
      }
    }

    i.fa {
      font-size: 12px;
    }
  }

  .hide{
    display: none !important;
  }

  .fademenuidiomas-enter, .fademenuidiomas-leave-to {
    transform: translateY(-5%);
    opacity: 0;
  }

  .fademenuidiomas-enter-active, .fademenuidiomas-leave-active {
    transition: opacity 0.2s, transform 0.2s;
  }
</style>

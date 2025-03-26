<template lang="pug">
    modal.modal-gen(name="hello-world" @closed="closeModal", height="auto" :scrollable="true")
      .head-modal
        h3 {{titulo}}
        button(@click="$modal.hide('hello-world')").close
          i(class="fa fa-times" aria-hidden="true")
      .content-modal
        ul
          li(v-for="dado in dados")
            .row
              .col-sm-3
                strong {{dado[0]}}
              .col-sm-9
                span(v-if="(dado[1] == null || dado[1].length == 0)") -
                p.overflow(v-else-if="dado[2] === 'descricao'") {{dado[1]}}
                span(v-else-if="dado[2] === 'string'") {{dado[1]}}
                a(v-else-if="dado[2] === 'link'", :href="dado[1]" target="_blank") {{dado[1]}}
                a(v-else-if="dado[2] === 'email'", :href="`mailto:${dado[1]}`") {{dado[1]}}
                ul(v-else-if="dado[2] === 'links'")
                  li(v-for="value in dado[1]")
                    router-link.link(:to="{ name: dado[3], params: {id: value.id} }") {{value.name}}
                ul(v-else)
                  li(v-for="value in dado[1]")
                    span {{value}}
</template>

<script>
import { EventBus } from '../../scripts/utils/EventBus';

export default {
  props: ['titulo', 'name', 'dados'],
  mounted() {
    this.$modal.show("hello-world");
  },
  methods: {
    closeModal() {
      EventBus.$emit('closeModal');
    }
  }
};
</script>

<style lang="scss">
div[data-modal="sucesso"], div[data-modal="erro"] {
  .v--modal-box.v--modal {
    width: auto !important;
    max-width: 450px !important;
    height: 180px !important;
    border-radius: 20px;
    left: 0 !important;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

  }
}
.modal-gen {

  color: $cor-cinza;
  @include media("<desktop-md") {
    padding: 0 15px;
  }

  h3 {
    margin: 0 0 10px 0;
    font-weight: bold;
    font-size: 18px;
  }

  strong {
    text-transform: none;
    @include media("<tablet") {
      margin-bottom: 5px;
      display: block;
    }
  }

  span {
    font-weight: normal;
    text-transform: none;
  }

  a {
    color: $cor-azul-1 !important;
    word-break: break-all;
  }

  .head-modal {
    display: flex;
    width: 100%;
    justify-content: space-between;

    button.close {
      position: relative;
      top: -3px;
    }
  }

  .content-modal {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        border-bottom: 1px solid gray;
        padding: 10px 0;

        &:last-child {
          border-bottom: none;
        }

        ul > li {
          border: none;
          padding: 0;
        }

      }
    }
    .overflow {
      max-height: 200px;
      overflow: auto;
    }
  }
  .v--modal-box.v--modal {
    flex-direction: column;
    height: auto ;
    padding: 30px;
    border-radius: 15px;
    @include media(">desktop-lg") {
      width: 50% ;
      left: 25% ;
    }
    @include media(">desktop", "<=desktop-lg") {
      width: 80% ;
      left: 10% ;
    }
    @include media("<desktop-md") {
      width: 100% ;
      left: 0 ;
    }
  }
}
</style>

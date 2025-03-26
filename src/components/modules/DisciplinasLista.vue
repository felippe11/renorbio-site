<template lang="pug">
  .disciplinas
    ul(v-if="areas.length")
      li(v-for="(area,index) in areas")
        router-link(:to="{ name: 'DisciplinasDoPrograma', params: { item: index} }") {{area.name}}
    template(v-else)
      p No momento não foi possível carregar a lista das áreas de concentração

</template>

<style lang="scss">

  .disciplinas ul {
    padding: 0;
    list-style: none;
  }

  .disciplinas li {
    margin-top: 15px;
  }

  .disciplinas li::after {
    content: "\f0a9";
    font-family: FontAwesome;
    font-size: 12px;
    color: $cor-azul-1;
    margin-left: 5px;
  }

  .disciplinas a {
    color: $cor-cinza;
  }

  .disciplinas a:hover {
    color: $cor-azul-1;
    text-decoration: none;
    cursor: pointer;
  }

</style>

<script>

  import Disciplinas from '../../scripts/services/Disciplinas';

  export default {
    data() {
      return {
        areas: []
      };
    },
    mounted() {
      this.getAreas();
    },
    methods: {
      getAreas() {
        const areasTratadas = [];
        Disciplinas.getAreas()
          .then(response => {
            if (!response) return
            for (let i = 0; i < response.data.areas.length; i++) {
              const areaTratada = {
                key: response.data.areas[i].id,
                name: response.data.areas[i].name
              };
              areasTratadas.push(areaTratada);
            }
            this.areas = areasTratadas;
          });
      }
    }
  };

</script>

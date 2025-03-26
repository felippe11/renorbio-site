<template lang="pug">
    .row
      .content.datas(:class="{'interna' : interna, 'col-sm-9' : interna, 'col-md-8' : interna}")
        span(v-if="datas.inscricao_start == datas.inscricao_end || datas.inscricao_end == null")
          strong Período de inscrição:
          |
          |
          a() {{datas.inscricao_start}}
        span(v-else)
          strong Período de inscrição:
          |
          |
          a() {{datas.inscricao_start}}
          |
          | a
          |
          a() {{datas.inscricao_end}}

        span
          strong Homologação das inscrições:
          |
          |
          a() {{datas.homologacao}}

        span(v-if="datas.resultado_aprovados")
          strong Divulgação dos resultados dos aprovados no currículo:
          |
          |
          a() {{datas.resultado_aprovados}}

        span(v-if="datas.avaliacao_start == datas.avaliacao_end || datas.avaliacao_end == null")
           strong Avaliação das propostas de pesquisa:
           |
           |
           a() {{datas.avaliacao_start}}
        span(v-else)
          strong Avaliação das propostas de pesquisa:
          |
          |
          a() {{datas.avaliacao_start}}
          |
          | a
          |
          a() {{datas.avaliacao_end}}

        span
          strong Divulgação dos resultados:
          |
          |
          a() {{datas.resultado}}
        span
          strong Matrículas:
          |
          |
          a() {{datas.matriculas_start}}
          |
          |
          |
          a(v-if="datas.matriculas_end") a {{datas.matriculas_end}}
</template>

<style lang="scss">

.content.datas {
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}

.content.datas.interna span {
  border-bottom: 1px solid #C2C2C2;
  padding-right: 45px;
  padding-bottom: 10px;
}

.content.datas.interna span:last-child {
  padding-right: 150px;
}

.content.datas span {
  margin-top: 10px;
}

.content.datas a {
  color: $cor-cinza;
}

.content.datas a:hover {
  text-decoration: none;
}

</style>

<script>
  import ProcessoSeletivo from '../../scripts/services/ProcessoSeletivo';
  import DataUtil from '../../scripts/utils/Data';

  export default {
    props: ['interna'],
    data() {
      return {
        datas: []
      };
    },
    created() {
      this.getDatas();
    },
    methods: {
      getDatas() {
        ProcessoSeletivo.getProcessoSeletivo()
          .then(response => {
            const datasTratadas = {
              name: response.data.registers.name,
              inscricao_start: DataUtil.dataTratada(response.data.registers.inscription_start),
              inscricao_end: (response.data.registers.inscription_end) ? DataUtil.dataTratada(response.data.registers.inscription_end) : null,
              homologacao: (response.data.registers.homologation_date) ? DataUtil.dataTratada(response.data.registers.homologation_date) : 'A definir',
              avaliacao_start: DataUtil.dataTratada(response.data.registers.rating_start),
              avaliacao_end: (response.data.registers.rating_end) ? DataUtil.dataTratada(response.data.registers.rating_end) : null,
              resultado: DataUtil.dataTratada(response.data.registers.result_date),
              matriculas_start: (response.data.registers.matriculation_start) ? DataUtil.dataTratada(response.data.registers.matriculation_start) : null,
              matriculas_end: (response.data.registers.matriculation_end) ? DataUtil.dataTratada(response.data.registers.matriculation_end) : null,
              resultado_aprovados: (response.data.registers.result_curriculum_date) ? DataUtil.dataTratada(response.data.registers.result_curriculum_date) : null
            };
            this.datas = datasTratadas;
          });
      }
    }
  };

</script>

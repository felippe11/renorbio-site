<template lang="pug">
  #vitrine-tecnologica
    .header
      h3.titulo.hr Vitrine Tecnológica
    .content
      p A Vitrine Tecnológica da RENORBIO apresenta os principais produtos, processos, metodologias e serviços tecnológicos desenvolvidos pelos pesquisadores da rede, demonstrando o potencial de inovação e transferência de tecnologia para o setor produtivo.
      .vitrine-items(v-if="tecnologias && tecnologias.length > 0")
        .vitrine-item(v-for="(tecnologia, index) in tecnologias" :key="index")
          .vitrine-titulo
            h4 {{ tecnologia.titulo }}
          .vitrine-descricao(v-html="tecnologia.descricao")
          .vitrine-autores(v-if="tecnologia.autores")
            strong Pesquisadores:
            span {{ tecnologia.autores }}
          .vitrine-tags(v-if="tecnologia.tags && tecnologia.tags.length > 0")
            strong Áreas:
            span.tag(v-for="tag in tecnologia.tags" :key="tag") {{ tag }}
      .vitrine-empty(v-else)
        p Estamos preparando nossa vitrine de tecnologias. Em breve teremos conteúdo disponível.
</template>

<script>
import * as config from '../../scripts/config';

export default {
  data() {
    return {
      tecnologias: [
        {
          titulo: "Biossensor para detecção rápida de patógenos em alimentos",
          descricao: "Dispositivo inovador que permite a detecção de patógenos alimentares em minutos, utilizando nanotecnologia e anticorpos específicos. Oferece resultados rápidos e precisos, contribuindo para a segurança alimentar.",
          autores: "Dra. Ana Silva, Dr. João Pereira",
          tags: ["Nanotecnologia", "Segurança Alimentar", "Diagnóstico"]
        },
        {
          titulo: "Biofilme antimicrobiano para conservação de alimentos",
          descricao: "Embalagem biodegradável com propriedades antimicrobianas derivadas de extratos vegetais da biodiversidade nordestina, prolongando a vida útil dos alimentos e reduzindo o desperdício.",
          autores: "Dr. Carlos Mendes, Dra. Patrícia Rocha",
          tags: ["Embalagens sustentáveis", "Conservação", "Biodiversidade"]
        },
        {
          titulo: "Processo de produção de biofertilizante a partir de resíduos agroindustriais",
          descricao: "Metodologia para transformação de resíduos agroindustriais em biofertilizantes ricos em nutrientes, promovendo a economia circular e a agricultura sustentável na região Nordeste.",
          autores: "Dra. Mariana Costa, Dr. Ricardo Oliveira",
          tags: ["Agricultura Sustentável", "Economia Circular", "Biorremediação"]
        }
      ]
    };
  },
  head: {
    title() {
      return {
         inner: `${config.SITE_TITLE} - Vitrine Tecnológica`
       };
     },
     meta: [
       {
         name: 'description',
         content: 'Conheça as tecnologias desenvolvidas pelos pesquisadores da RENORBIO',
         id: 'description'
       }
     ]
   }
};
</script>

<style lang="scss" scoped>
#vitrine-tecnologica {
  .content {
    margin-bottom: 30px;
    p {
      margin-bottom: 20px;
      line-height: 1.6;
    }
  }
  .vitrine-items {
    margin-top: 30px;
  }
  .vitrine-item {
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    border-left: 4px solid $cor-azul-1;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    .vitrine-titulo {
      margin-bottom: 10px;
      h4 {
        color: $cor-azul-1;
        margin: 0;
      }
    }
    .vitrine-descricao {
      margin-bottom: 15px;
      line-height: 1.5;
    }
    .vitrine-autores {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .vitrine-tags {
      margin-top: 10px;
      .tag {
        display: inline-block;
        background-color: $cor-azul-2;
        color: rgb(40, 41, 79);
        padding: 4px 8px;
        border-radius: 3px;
        font-size: 12px;
        margin-right: 5px;
        margin-bottom: 5px;
      }
    }
  }
  .vitrine-empty {
    text-align: center;
    padding: 40px 0;
    color: #666;
  }
}
</style>

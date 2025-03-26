<template lang="pug">
  .content
    .galeria
      .imagens(v-for="item in itens")
        .galeria-img
          figure(v-if="link")
            router-link(:to="{ name: 'Album', params: { slug: item.slug} }")
              img(:src="item.cover" :title="'Abrir a imagem'" :alt="item.titulo")
              figcaption(v-html="item.titulo")
          figure(v-else :title="item.legenda")
            img(:src="item.anexo")
</template>

<script>

  export default {
    props: ['itens', 'galeria'],
    data() {
      return {
        link: this.galeria
      };
    }
  };
</script>

<style lang="scss" scoped>

.galeria {
  display: flex;
  flex-wrap: wrap;
}

.imagens {
  margin-right: 30px;
  margin-bottom: 30px;
  opacity: 0.8;
  @include media("<992px") {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}

.imagens:hover {
  opacity: 1;
}

.galeria-img {
  width: 215px;
  border-radius: 5px;
}

.galeria-img figure img {
  width: 215px;
  height: 140px;
  border-radius: 5px;
  object-fit: cover;
}

.galeria-img figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.galeria-img figure figcaption {
  text-align: center;
  margin-top: 10px;
}

.galeria-img figure a {
  color: $cor-cinza;
}

.galeria-img figure a:hover {
  color: $cor-azul-1;
}

.galeria-img a {
  color: $cor-azul-1;
}

.paginacao {
  margin-bottom: 30px;
}

@include media ("<tablet") {
  .galeria {
    justify-content: center;
  }

  .galeria-img {
    width: 100%;
  }

  .galeria-img figure img {
    width: 100%;
  }

  .imagens {
    margin-right: 0;
  }

}

</style>

<template lang="pug">
  //- .content.share
    a.share(href="http://www.addthis.com/bookmark.php?v=300&pubid=ra-5a8b2f71ebdd2ba3" target="_blank" noopener) Compartilhar
      i.fa.fa-share-alt
    //-.addthis_inline_share_toolbox
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

  i.fa.fa-share-alt {
    margin-left: 10px;
    font-size: 18px;
  }

  @include media("<tablet") {
    .content.share {
      margin-bottom: 15px;
    }
  }
</style>

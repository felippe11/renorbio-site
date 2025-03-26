<template lang="pug">
  breadcrumb(:itens="itens")
</template>

<script>
  import Breadcrumb from '@BASICS/Breadcrumb';

  export default {
    components: {
      Breadcrumb
    },
    props: ['itens']
  };
</script>

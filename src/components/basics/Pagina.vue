<template lang="pug">
  main#main
    .container.content
      .row
        .col-xs-12.col-sm-12.col-md-10.col-lg-10.principal
          slot(name="breadcrumb")
          slot(name="titulo")
          .flex
            slot(name="principal")
            slot(name="footer")
</template>

<script>

  export default {

  };

</script>

<style lang="scss" scoped>

  .flex {
    display: flex;
    flex-direction: column;
  }

  .content {
    margin-bottom: 30px;
  }
</style>

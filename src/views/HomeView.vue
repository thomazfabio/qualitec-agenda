<template>
  <h1 class="primary--text text--accent-4">Home aqui</h1>
</template>

<script>
export default {
  //INICIO #GUARDAS DE ROTAS
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      var store = vm.$store.state.user;
      if (store == null) {
        vm.$router.replace({ name: "login" });
      }
    });
  },
  //FIM #GUARDAS DE ROTAS
};
</script>
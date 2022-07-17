<template>
  <v-container>
    <h1 class="primary--text text--accent-4">Dados do Usuario</h1>
    <span></span>
    <span>{{ userEmail }}</span>
    <span>{{ userId }}</span>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    userName: '',
    userEmail: '',
    userId: '',
  }),
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
  mounted() {
    this.userEmail = this.$store.state.user.email
  },
};
</script>
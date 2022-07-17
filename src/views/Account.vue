<template>
  <v-btn block class="primary--text text--accent-4">
    Cadastrar
  </v-btn>
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
  data: () => ({
    id:"",
    name:"",
    email:"",

  }),
}

</script>
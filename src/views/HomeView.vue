<template>
  <h1 class="primary--text text--accent-4">Home aqui</h1>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
      next((vm) => {
        console.log("na rota");
        var store = vm.$store.state.user;
        console.log(store);
        if(store == null){vm.$router.replace({ name: "login" })}
      });
  },
};
</script>
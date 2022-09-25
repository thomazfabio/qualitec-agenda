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

};
</script>
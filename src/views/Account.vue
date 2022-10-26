<template>
  <cardAccount />
</template>

<script>
import { mapState } from "vuex";
import cardAccount from "../components/CardAccount.vue";
export default {
  components: {
    cardAccount,
  },
  data: () => ({}),
  created() {
    console.log(this.$vuetify.breakpoint.name);
  },
  computed: {
    ...mapState({
      userId: (state) => {
        return state.currentUser.uid + "";
      },
      userEmail: (state) => {
        return state.currentUser.email + "";
      },
      userName: (state) => {
        return state.currentUser.displayName + "";
      },
    }),
  },
};
</script>
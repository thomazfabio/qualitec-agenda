<template>
  <v-container  class="elevation-4">
  <ServiceSchedule></ServiceSchedule>
  </v-container>
</template>

<script>
import ServiceSchedule from "../components/ServiceSchedule.vue"
export default {
  
  components:{
    ServiceSchedule
  },
  data: () => ({
    userName: '',
    userEmail: '',
    userId: '',
  }),

};
</script>
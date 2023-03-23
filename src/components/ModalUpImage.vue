<template>
  <v-dialog v-model="dialog" persistent :width="width">
    <v-card v-if="isAvatarOn">
      <v-container class="">
        <v-row class="pa-2">
          <v-btn block depressed color="primary">
            <v-icon>mdi-camera</v-icon> Camera</v-btn
          >
        </v-row>
        <v-row class="pa-2">
          <v-btn block depressed color="primary">
            <v-icon>mdi-upload</v-icon> Upload</v-btn
          ></v-row
        >
        <v-row class="pa-2">
          <v-btn block depressed color="warning" @click="$emit('closeModal')">
            <v-icon>mdi-cancel</v-icon> Cancelar</v-btn
          ></v-row
        >
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "ModalUpImage",

  props: {
    width: String,
    RefImage: String,
    isAvatar: Boolean,
  },
  
  },
  data() {
    return {
      dialog: true,
      isAvatarOn: this.isAvatar,
    };
  },
  methods:{
      cancelUpImg: function ()
      {return this.dialog = false},
  },
};
</script>
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
          <v-btn block depressed color="primary" @click="showCropper = true">
            <v-icon>mdi-upload</v-icon> Upload</v-btn
          ></v-row
        >
        <v-row class="pa-2">
          <v-btn block depressed color="warning" @click="$emit('closeModal')">
            <v-icon>mdi-cancel</v-icon> Cancelar</v-btn
          ></v-row
        >
      </v-container>

      <imgCropper
        v-model="showCropper"
        :labels="{ submit: 'OK', cancel: 'CANCELAR' }"
        :upload-handler="imgUpFirebase"
      >
      </imgCropper>
    </v-card>
  </v-dialog>
</template>

<script>
import imgCropper from "vue-avatar-cropper";
export default {
  components: {
    imgCropper,
  },
  name: "ModalUpImage",

  props: {
    width: String,
    refImage: String,
    nameImage: String,
    typeImage: String,
    isAvatar: Boolean,
  },

  data() {
    return {
      showCropper: false,
      dialog: true,
      isAvatarOn: this.isAvatar,
    };
  },
  methods: {
    cancelUpImg: function () {
      return (this.dialog = false);
    },
    imgUpFirebase: function (data) {
      data.getCroppedCanvas().toBlob(async (blob) => {
        let file = await blob;
        let imgUp = {
          RefImg: this.refImage,
          nameImg: this.nameImage,
          img: file,
        };
        this.$store.dispatch("upImgFirebase", imgUp);
      }, "image/" + this.typeImage);
    },
  },
};
</script>
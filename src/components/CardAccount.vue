<template>
  <v-container>
    <v-card
      style="margin: 0 auto; margin-top: 15px"
      :width="width"
      elevation="6"
      :loading="loading"
      class="pb-10"
    >
      <v-card-title>Informações da conta</v-card-title>
      <v-divider></v-divider>
      <v-container class="d-flex" style="background: #f5f5f5"
        ><v-avatar color="primary" size="105">
          <img src="https://avatars.githubusercontent.com/thomazfabio" alt="" />
        </v-avatar>

        <v-btn
          style="margin-top: 75px; margin-left: 65px"
          absolute
          small
          color="primary"
          dark
          @click="btnUpAvatar()"
        >
          <v-icon> mdi-camera </v-icon>
        </v-btn>
      </v-container>
      <v-divider></v-divider>
      <!--inicio codigo da tabela-->
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <th class="text-left pr-2" width="10%">Nome:</th>
              <td class="text-left pl-0 pr-0">{{ userName }}</td>
              <td class="text-left pl-2 pr-0">
                <v-btn tile small color="primary">
                  <v-icon small> mdi-pencil </v-icon>
                </v-btn>
              </td>
            </tr>

            <tr>
              <th class="text-left pr-2">Email:</th>
              <td class="text-left pl-0 pr-0">{{ userEmail }}</td>
              <td class="text-left pl-2 pr-0">
                <v-btn tile small color="primary">
                  <v-icon small> mdi-pencil </v-icon>
                </v-btn>
              </td>
            </tr>

            <tr>
              <th class="text-left pr-2">Telefone:</th>
              <td class="text-left pl-0 pr-0">+556696112740</td>
              <td class="text-left pl-2 pr-0">
                <v-btn tile small color="primary">
                  <v-icon small> mdi-pencil </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <!--fim codigo da tabela-->
      <v-divider></v-divider>
      <v-row>
        <v-btn class="ml-6 mt-10" small color="red" dark @click="deletar()"
          >Deletar conta</v-btn
        >
      </v-row>
    </v-card>

    <ModalImgT
      :width="width"
      :isAvatar="true"
      typeImage="jpeg"
      nameImage="avatar"
      refImage="avatar"
      v-if="upAvatar"
      @closeModal="closeModal()"
    >
    </ModalImgT>

    <!--Componente avançado ESDUDAR BEM-->
    <ModalAlert v-if="deleteAlert">
      <template v-slot:title> Tem certeza ? </template>

      <template v-slot:text>
        Apos deletar sua conta você será redirecinado para o inicio e não terá
        mais acesso a nenhuma de suas insformaçoes cadastradas aqui, você
        concorda?
      </template>

      <template v-slot:btn1>
        <v-btn outlined color="error" text @click="deleteAccount()"
          >Confirmar</v-btn
        >
      </template>

      <template v-slot:btn2>
        <v-btn outlined color="success" text @click="fechaModalAlert()"
          >Cancelar</v-btn
        >
      </template>
    </ModalAlert>
    <!--Componente avançado ESDUDAR BEM-->
  </v-container>
</template>


<script>
import { mapState } from "vuex";
import ModalImgT from "../components/ModalUpImage.vue"; // Modal para tratamento e upload da imagem
import ModalAlert from "../components/ModalAlert.vue";
export default {
  components: {
    ModalAlert,
    ModalImgT,
  },
  name: "cardAccount",
  data: () => ({
    loading: false,
    deleteAlert: false,
    upAvatar: false,
  }),
  methods: {
    fechaModalAlert: function () {
      this.deleteAlert = false;
    },
    closeModal: function () {
      this.upAvatar = false;
    },
    deletar: function () {
      this.deleteAlert = true;
    },
    btnUpAvatar: function () {
      this.upAvatar = true;
    },
    deleteAccount: function () {
      this.fechaModalAlert();
    },
  },

  computed: {
    ...mapState({
      userId: (state) => {
        return state.currentUser.uid;
      },
      userEmail: (state) => {
        return state.currentUser.email;
      },
      userName: (state) => {
        return state.currentUser.displayName;
      },
    }),

    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100vw";
        case "sm":
          return "70vw";
        case "md":
          return "60vw";
        case "lg":
          return "55vw";
        case "xl":
          return "50vw";
      }
    },
  },
};
</script>
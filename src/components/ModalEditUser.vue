<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-container>
          <v-card-title class="primary--text"
            >Alterar {{ dataUser.name }}</v-card-title
          >
          <v-card-text class="pb-0">
            <v-row>
              <v-col>
                <v-text-field
                  label="Legal first name*"
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-container>
        <v-card-actions class="pt-0 pr-5">
          <v-spacer></v-spacer>
          <v-btn color="personal_action_2 darken-1" text @click="$emit('closeModal')">
            Fechar
          </v-btn>
          <v-btn color="personal_action_1 darken-1" text @click="dialog = false">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
  }),
  props: {
   dataUser: Object,
  },
};
</script>



<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-container>
          <v-card-title class="primary--text">Alterar {{ dataUser.name }}</v-card-title>
          <v-card-text class="pb-0" v-if="dataUser.name == 'nome'">
            <v-row>
              <v-col>
                <v-text-field label="Seu nome*" :placeholder="dataUser.value.split(' ')[0]" outlined dense
                  required></v-text-field>
                <v-text-field label="Seu sobrenome*" :placeholder="dataUser.value.split(' ').slice(1).join(' ')" outlined
                  dense required></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="pb-0" v-if="dataUser.name == 'telefone'">
            <v-row>
              <v-col>
                <v-text-field name="input-telefone" label="Seu telefone*" v-mask=" '+55 (##) 9 ####-####' " :placeholder="telPlaceholder" outlined dense required></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="pb-0" v-if="dataUser.name == 'email'">
            <v-row>
              <v-col>
                <p>O email <strong>não pode ser alterado</strong></p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-container>
        <v-card-actions class="pt-0 pr-5">
          <v-spacer></v-spacer>
          <v-btn color="personal_action_2 darken-1" text @click="$emit('closeModal')">
            Fechar
          </v-btn>
          <v-btn color="personal_action_1 darken-1" text>
            Salvar
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
//importado como diretiva local
import { mask } from 'vue-the-mask'
export default {
  directives: { mask },
data: () => ({
  dialog: true,
  telPlaceholder: '+55 (00) 9 0000-0000',
  rules: [

  ]
}),
  props: {
  dataUser: Object,
  },
};
</script>
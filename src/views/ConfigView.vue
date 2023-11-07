<template>
    <div>
        <v-container>
            <v-card class="mb-2">
                <v-card-title>Cadastro de Colaborador</v-card-title>
                <v-divider></v-divider>
                <v-card-text>Aqui você pode cadastrar seus colaboradores, é possivel também listar e editar</v-card-text>
                <v-card-actions>
                    <v-btn class="primary" @click="modalOn">Cadastrar</v-btn>
                    <v-btn class="success" >Visualizar / editar </v-btn>
                </v-card-actions>
            </v-card>

            <v-card>
                <v-card-title>Cadastro de Serviços</v-card-title>
            </v-card>

        </v-container>
        <ModalCollaborator ref="modalCollaborator" ></ModalCollaborator>
    </div>
</template>

<script>
import ModalCollaborator from "../components/ModalCollaborator.vue"
export default {
    components: {
        ModalCollaborator
    },
    data: () => ({
     
    }),
    methods: {
        closeEditModal: function () {
            this.modalOn = false;
        },
        modalOn: function () {
            this.$refs.modalCollaborator.openModal();
        },
    }

}

</script>
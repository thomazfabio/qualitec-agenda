<template>
    <div>
        <v-container>
            <v-card class="mb-2">
                <v-card-title>Cadastro de colaborador</v-card-title>
                <v-divider></v-divider>
                <v-card-text>Aqui você pode cadastrar seus colaboradores, é possivel também listar e editar</v-card-text>
                <v-card-actions>
                    <v-btn class="primary" @click="modalOn">Cadastrar</v-btn>
                    <v-btn class="success">Visualizar / editar </v-btn>
                </v-card-actions>
            </v-card>

            <v-card>
                <v-card-title>Configurações da agenda</v-card-title>
                <v-divider></v-divider>
                <v-card-subtitle>
                    Parametros necessarios para a configuração da agenda
                </v-card-subtitle>
                <v-container>
                    <v-card>
                        <v-card-title>
                            Parametro Geral
                        </v-card-title>
                        <v-card-text>data inicial: 3 data final 5</v-card-text>

                        <v-card-actions>
                            <v-btn class="warning">Editar</v-btn>
                            <v-btn class="error">Excluir</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
                <v-card-actions>
                    <v-btn class="primary">Novo</v-btn>
                </v-card-actions>
                <v-divider></v-divider>
            </v-card>

        </v-container>
        <ModalCollaborator ref="modalCollaborator"></ModalCollaborator>
    </div>
</template>

<script>
import ModalCollaborator from "../components/ModalCollaborator.vue"
export default {
    components: {
        ModalCollaborator
    },
    data: () => ({
        dataParameters: {
            id: 1,
            agendaNmae: "Geral",
            start_date: 3,
            end_date: 5
        }
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
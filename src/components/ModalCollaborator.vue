<template>
    <v-dialog v-model="dialog" persistent max-width="800px">
    <FormCollaborator @closeModal=" closeModal()"></FormCollaborator>
    </v-dialog>
</template>

<script>
import FormCollaborator from './FormCollaborator.vue';
export default {
    name: "ModalCollaborator",
    components:{
        FormCollaborator
    },
    data: () => ({
        dialog: false,
    }),
    methods: {
        closeModal: function () {
            this.dialog = false;
        },
        openModal: function () {
            this.dialog = true;
        },
    }

}
</script>
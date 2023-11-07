<template>
    <div>
        <v-container>
            <v-form class="personal_bg_card  pa-2 rounded">
                <v-row>
                    <v-col>
                        <h1 class="d-flex justify-center primary--text">Cadastrar novo colaborador</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p class="d-flex justify-center font-weight-bold" style="font-size: small">
                            Preencha os campos abaixo para criar o cadastro
                        </p>
                    </v-col>
                </v-row>

                <v-alert dense outlined type="error" v-if="detectedRulesErrors.length > 0">
                    Todos os campos devem ser <strong>preenchidos corretamente</strong>
                </v-alert>
                <v-row dense>
                    <v-col>
                        <v-text-field label="Nome" placeholder="Seu primeiro nome" outlined dense v-model="firstname"
                            :rules="nameRules"></v-text-field>
                    </v-col>

                    <v-col>
                        <v-text-field label="Sobrenome" placeholder="Seu sobrenome" outlined dense v-model="lastname"
                            :rules="lastNameRules"></v-text-field>
                    </v-col>
                </v-row>

                <v-row dense>
                    <v-col>
                        <v-text-field label="CPF" placeholder="Seu CPF" outlined dense></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Celular" placeholder="Seu celular" outlined dense></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col>
                        <v-text-field label="Data de nascimento" placeholder="Sua data de nascimento" outlined
                            dense></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="RG" placeholder="Seu RG" outlined dense></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col>
                        <v-select :items="items" label="Outlined style" outlined></v-select>
                    </v-col>
                </v-row>

                <v-row dense>
                    <v-col>
                        <v-text-field label="E-mail" placeholder="Seu e-mail" outlined dense v-model="email"
                            :rules="emailRules"></v-text-field>
                    </v-col>

                    <v-col>
                        <v-text-field label="Senha" placeholder="Sua senha" outlined dense
                            :append-icon="showEyePass ? 'mdi-eye' : 'mdi-eye-off'" :type="showEyePass ? 'text' : 'password'"
                            @click:append="showEyePass = !showEyePass" v-model="password"
                            :rules="passwordRules"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Confirmar senha" placeholder="Confirme sua senha" outlined dense
                            :append-icon="showEyePassCheck ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showEyePassCheck ? 'text' : 'password'"
                            @click:append="showEyePassCheck = !showEyePassCheck" v-model="passwordCheck"
                            :rules="passwordRules"></v-text-field>
                    </v-col>
                </v-row>
                <v-row dense>
                    <v-col>
                        <v-checkbox label="Administrador" value="admin"></v-checkbox>
                    </v-col>
                    <v-col>
                        <v-checkbox label="Ativo" value="active"></v-checkbox>
                    </v-col>
                </v-row>



                <v-alert dense outlined type="error" v-if="!passwordEquals">
                    As senhas devem ser <strong>iguais</strong>
                </v-alert>
            </v-form>
            <v-row class="pt-2" d-flex>
                <v-col>
                    <v-btn color="primary" class="white--text">Salvar</v-btn>
                </v-col>
                <v-col class="text-right">
                    <v-btn color="error" class="white--text" @click="$emit('closeModal')">Cancelar</v-btn>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "FormCollaborator",
    data: () => ({
        items: ["Item 1", "Item 2", "Item 3"],
        detectedRulesErrors: [],
        showEyePass: false,
        showEyePassCheck: false,
        firstname: "",
        lastname: "",
        password: "",
        passwordCheck: "",
        email: "",
        nameRules: [
            (v) => !!v || "Nome é obrigatório",
            (v) => v.length <= 20 || "O nome deve ter menos de 20 caracteres",
            (v) => v.length >= 3 || "O nome deve ter no mínimo 3 caracteres",
        ],
        lastNameRules: [
            (v) => !!v || "Sobrenome é obrigatório",
            (v) => v.length <= 30 || "O sobrenome deve ter menos de 30 caracteres",
            (v) => v.length >= 2 || "O sobrenome deve ter no mínimo 2 caracteres",
        ],
        passwordRules: [
            (v) => !!v || "Password é obrigatório",
            (v) => v.length >= 6 || "Password deve conter no mínimo 6 caracteres",
        ],
        emailRules: [
            (v) => !!v || "E-mail é obrigatório",
            (v) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+(\.[^\s@]+)*$/.test(v) ||
                "E-mail deve ser válido",
        ],
    }),
    computed: {
        passwordEquals() {
            return this.password === this.passwordCheck;
        },
    },

}
</script>
<template>
    <main class="login_main">
        <h1>Login Page</h1>
        <section>
            <form v-on:@submit.prevent="submitHandler">
                <section>
                    <article>
                        <label for="email">Email</label>
                        <input v-model="data.email" id="email" type="text" placeholder="Votre email" class="input">
                    </article>
                    <article>
                        <label for="password">Password</label>
                        <input v-model="data.password" id="password" type="paswword" placeholder="Votre mot de passe" class="input">
                    </article>
                    <!-- <FieldComponent class="input" v-for="field in fields" :data="field"></FieldComponent> -->
                    <article>
                        <button type="submit" class="button is-primary">Valider</button>
                        <!-- <ButtonComponent class="button" v-for="btn in buttons" :data="btn"></ButtonComponent> -->
                        <button type="reset" class="button is-danger">Reset</button>
                    </article>
                </section>
            </form>
        </section>
    </main>
</template>
<script setup lang="ts">
import {watch, reactive} from "vue"
import ButtonComponent from "../components/ButtonComponent.vue"
import FieldComponent from "../components/FieldComponent.vue"
import inputValidato from "../utils/input-validato"

const data = reactive({
    email:"",
    password:""
})

const error = reactive({
    errorEmail: "",
    errorPassword: ""
})

watch(data.email, (val) => {
    inputValidato(val, 'email')
})

watch(data.password, (val) => {
    inputValidato(val, 'password')
})


// const submitHandler = function() {
//     error.errorEmail = isUserInputValid(data.email) ?'Email valide' :'Email incorrecte'
// }

const fields = [
    {
        id:"email",
        type:"email",
        placeholder: "Entrer votre identifiant"
    },
    {
        id:"password",
        type:"password",
        placeholder: "Entrer votre mot de passe"
    }
]

const buttons = [
    {
        id: "submit-button",
        type: "submit",
        textContent: "Valider"
    },
    {
        id :"reset-button",
        type: "reset",
        placeholder: "Réinitialiser"
    }
]

</script>
<style></style>
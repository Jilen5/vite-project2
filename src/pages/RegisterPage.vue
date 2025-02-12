<template>
    <main>
        <h1>Login Page</h1>
        <section>
            <form action="">
                <section>
                    <FieldComponent class="input" v-for="field in fields" :data="field"></FieldComponent>
                </section>
                <section>
                    <ButtonComponent class="button" v-for="btn in buttons" :data="btn"></ButtonComponent>
                </section>
            </form>
        </section>
    </main>
</template>
<script setup lang="ts">
import ButtonComponent from "../components/ButtonComponent.vue"
import FieldComponent from "../components/FieldComponent.vue"

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
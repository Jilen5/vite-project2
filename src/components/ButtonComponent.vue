<template>
<article>
    <button
        :type="data.type || 'button'"
        :id="data.id">{{ data.textcontent }}</button>
</article>
</template>
<script setup lang="ts">



interface dataInterface {
    type: 'submit' | 'reset' | 'button',
    id: string | number
    textContent: string
}

interface ButtonComponentProps {
    data: dataInterface
}

defineProps<ButtonComponentProps>()

</script>
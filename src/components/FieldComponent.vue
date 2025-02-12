<template>
<article>
    <label for=""></label>
    <input
        :id="data.id"
        :type="data.type ? data.type : 'text'"
        :placeholder="data.placeholder"
        >
</article>
</template>
<script setup lang="ts">

interface dataInterface {
    type: string,
    id: string | number
    placeholder: string
}

interface FieldComponentProps {
    data: dataInterface
}

defineProps<FieldComponentProps>()

</script>
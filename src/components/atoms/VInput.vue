<script setup lang="ts">
defineProps<{
	type?: string
}>()

const value = defineModel('value')

</script>

<template>
	<input :type="type" v-model="value" />
</template>
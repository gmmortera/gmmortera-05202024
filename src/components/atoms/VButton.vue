<script setup lang="ts">
const props = defineProps<{
	type: string
	text: string
}>()
const emit = defineEmits(['method'])
</script>

<template>
	<button :type="type" @click.prevent="emit('method')">{{ text }}</button>
</template>
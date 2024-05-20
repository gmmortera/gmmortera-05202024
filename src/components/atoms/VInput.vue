<script setup lang="ts">
const props = defineProps<{
	type: string
	value?: string
}>()
const emit = defineEmits(['method'])

</script>

<template>
	<input :type="type" @click.prevent="emit('method', value)" />
</template>
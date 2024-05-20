<script setup lang="ts">
defineProps<{
	tag: string
	type?: string
}>()

const value = defineModel('value')

</script>

<template>
	<component :is="tag" :type="type" v-model="value"></component>
</template>
<script setup lang="ts">
defineProps<{
	type: string
}>()

</script>

<template>
	<input :type="type" />
</template>
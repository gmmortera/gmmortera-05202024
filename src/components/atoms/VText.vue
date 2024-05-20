<script setup lng="ts">
const props = defineProps<{
	tag: string
	text: string
}>()

const validateTag = () => {
	return ['p', 'label', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].find((t) => t === props.tag.toLowerCase())
}

</script>

<template>
	<component :is="validateTag()">{{ text }}</component>
</template>
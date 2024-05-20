<script setup lang="ts">
import VText from '@/components/atoms/VText.vue'
import VInput from '@/components/atoms/VInput.vue'
import VButton from '@/components/atoms/VButton.vue'
import VForm from '@/components/molecules/VForm.vue'
import { useTaskRepoStore } from '@/stores/taskRepo.ts'
import { ref, type Ref } from 'vue'

defineProps<{
	value?: string
}>()
const { get, create, updateStatus, updateDesc, remove, state } = useTaskRepoStore()

const title: Ref<string> = ref('')
const description: Ref<string | undefined> = ref('')

</script>

<template>
	<VForm>
		<VText 
			tag="label"
			text="Title"
		/>
		<VInput
			tag="input"
			type="text"
			v-model:title="title"
		/>
		<VText 
			tag="label"
			text="Description"
		/>
		<VInput
			tag="textarea"
			v-model:description="description"
		/>
		<VButton 
			type="submit"
			text="Add"
			@method="create(title, description)"
		/>
	</VForm>
</template>
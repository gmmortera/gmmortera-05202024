<script setup lang="ts">
import VText from '@/components/atoms/VText.vue'
import VInput from '@/components/atoms/VInput.vue'
import VButton from '@/components/atoms/VButton.vue'
import VForm from '@/components/molecules/VForm.vue'
import { useTaskRepoStore } from '@/stores/taskRepo.ts'
import { ref, type Ref } from 'vue'

const { create } = useTaskRepoStore()

const title: Ref<string> = ref('')
const description: Ref<string> = ref('')

const addTask = () => {
	create(title.value, description.value)
	console.log(title.value)
	console.log(description.value)
	title.value = ''
	description.value = ''
	console.log('HERE')
}

</script>

<template>
	<VForm>
		<VText 
			tag="label"
			text="Title"
		/>
		<VInput
			type="text"
			v-model:value="title"
			maxlength="250"
			required
		/>
		<VText 
			tag="label"
			text="Description"
		/>
		<VInput
			v-model:value="description"
			maxlength="1000"
		/>
		<VButton 
			type="submit"
			text="Add"
			@method="addTask"
		/>
	</VForm>
</template>
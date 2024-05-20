<script setup lang="ts">
import VText from '@/components/atoms/VText.vue'
import VInput from '@/components/atoms/VInput.vue'
import VButton from '@/components/atoms/VButton.vue'
import TaskForm from '@/components/organisms/TaskForm.vue'
import { useTaskRepoStore } from '@/stores/taskRepo.ts'
import { ref, type Ref } from 'vue'
import { v4 as uuid } from 'uuid'

const { get, create, updateStatus, updateInfo, remove, state } = useTaskRepoStore()

const show: boolean = ref(false)
const description: string = ref('')
	

</script>

<template>
	<ul>
		<li v-for="task in get" :key="task.id">
			<VText 
				tag="p"
				:text="task.title"
			/>
			<VText 
				tag="p"
				:text="task.description"
			/>
			<VText 
				tag="p"
				:text="task.status"
			/>
			<VButton 
				v-if="show"
				type="button"
				text="Start"
				@method="updateStatus(task.id)"
			/>
			<div v-if="show">
				<VText 
					tag="label"
					text="New Title"
				/>
				<VInput
					type="text"
					v-model:value="title"
					maxlength="250"
				/>
				<VText 
					tag="label"
					text="New Description"
				/>
				<VInput
					type="text"
					v-model:value="description"
					maxlength="1000"
				/>
				<VButton 
					type="button"
					text="Add"
					@method="updateInfo(task.id, title, description)"
				/>
			</div>
			<VButton
				v-if="!show"
				type="button"
				text="Edit"
				@method="show = !show"
			/>
			<VButton
				v-else
				type="button"
				text="Done"
				@method="show = !show"
			/>
			<VButton 
				v-if="show"
				type="button"
				text="Delete"
				@method="remove(task.id)"
			/>
		</li>
	</ul>
</template>
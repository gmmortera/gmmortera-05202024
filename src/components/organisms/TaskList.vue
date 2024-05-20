<script setup lang="ts">
import VText from '@/components/atoms/VText.vue'
import VInput from '@/components/atoms/VInput.vue'
import VButton from '@/components/atoms/VButton.vue'
import TaskForm from '@/components/organisms/TaskForm.vue'
import { useTaskRepoStore } from '@/stores/taskRepo.ts'
import { ref, type Ref } from 'vue'
import { v4 as uuid } from 'uuid'

const { get, create, updateStatus, updateDesc, remove, state } = useTaskRepoStore()

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
				type="button"
				text="Start"
				@method="updateStatus(task.id)"
			/>
			<div v-if="show">
				<VInput 
					v-if="show"
					tag="input"
					type="text"
					v-model:value="description"
				/>
				<VButton 
					type="button"
					text="Add"
					@method="updateDesc(task.id, description)"
				/>
			</div>
			<VButton 
					type="button"
					text="Edit"
					@method="show = !show"
				/>
		</li>
	</ul>
</template>
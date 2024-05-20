import { defineStore } from 'pinia'
import { ref, type Ref, computed } from 'vue'
import { type Task, Status } from '@/models/Task.ts'
import { v4 as uuid } from 'uuid'

const useTaskRepoStore = defineStore('task-repo', () => {
	const tasks: Ref<Array<Task>> = ref([])
	const state: Ref<{ isError: boolean, message: string }> = ref({ isError: false, message: '' })

	const get = computed(() => tasks) as const

	const create = (newTitle: string, newDesc?: string = ''): void => {
		const newTask: Task = {
			id: uuid(),
			title: newTitle,
			status: Status.TODO,
			description: newDesc
		}

		tasks.value.push(newTask)
	}
	
	const updateStatus = (id: uuid): void => {
		const currTask = tasks.value.find((t) => t.id === id)

		if(!currTask) {
			state.value = { isError: true, message: 'Update unsuccessful' }
			return
		}

		if(currTask.status === Status.TODO) {
			currTask.status = Status.IN_PROGRESS

			state.value = { isError: false, message: 'Update successful' }
		} else {
			currTask.status = Status.DONE
			state.value = { isError: false, message: 'Update successful' }
		}

	}

	const updateDesc = (id: uuid, newDesc?: string = ''): void => {
		const currTask = tasks.value.find((t) => t.id === id)

		if(!currTask) {
			state.value = { isError: true, message: 'Update unsuccessful' }
			return
		} else {
			currTask.description = newDesc
			state.value = { isError: false, message: 'Update successful' }
		}

	}

	const remove = (id: uuid): void => {
		const currTask = tasks.value.find((t) => t.id === id)

		if(!currTask) {
			state.value = { isError: true, message: 'Delete unsuccessful' }
			return
		} else {
			tasks.value = tasks.value.filter((t) => t.id !== id)
			state.value = { isError: false, message: 'Delete successful' }
		}
	}

	return { get, create, updateStatus, updateDesc, remove, state }
})

export { useTaskRepoStore }
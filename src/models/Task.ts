import { v4 as uuid } from 'uuid'

enum Status {
	TODO = 'TODO',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE'
}

interface Task {
	id: uuid
	title: string
	status: Status
	description?: string
}

export { Task, Status }
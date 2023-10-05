export type ToDoDetail = {
    id: number,
    task: string,
    version: number
}

export type ToDoAppState = {
    todoList: Array<ToDoDetail>,
    command: string
}

export type ToDoHeaderState = {
    task: string
}

export type ToDoDetailState = {
    task: string,
    editFlag: boolean
}

export type ToDoHeaderProps = {
    handleRegist: (e: { task: string }) => void,
}

export type ToDoDetailsProps = {
    model: ToDoDetail,
    handleEdit: (e: { task: string }) => void
    handleDelete: () => void
}
import { ToDoHeader } from '@/sample/todo3/components/ToDoHeader'
import { ToDoRow } from '@/sample/todo3/components/ToDoRow'
import { useToDoState } from '@/sample/todo3/hooks'

export default function ToDoApp() {
    const [state, { addTaskAction, editTaskAction, delTaskAction }] = useToDoState()

    return (
        <>
            <h1>TODO APP - 推敲2(Custom Hooks)</h1>

            <ToDoHeader handleRegist={(e) => {
                addTaskAction(e.task)
            }} />

            {state.todoList.map((todo) =>
                <ToDoRow key={todo.id} model={todo}
                    handleEdit={(e) => {
                        editTaskAction(todo, e.task)
                    }}
                    handleDelete={() => {
                        delTaskAction(todo)
                    }} />
            )}
        </>
    )
}
import styles from './styles/gantt-task.module.css'
import { TaskData } from './types'

export type Props = {
    task: TaskData,
    depth: number
}

export default function GanttTask(props: Props) {
    return (
        <div>
            <div className={styles.task}>
                <span>{props.task.taskName}</span>
            </div>
            {props.task.children.map((child, idx) =>
                <GanttTask key={child.id} task={child} depth={props.depth + idx} />
            )}
        </div>
    )
}
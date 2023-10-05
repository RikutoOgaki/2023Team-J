import styles from './styles/gantt-timeline.module.css'
import { TaskData } from './types'

export type Props = {
    task: TaskData
}

function ScheduleBar(props: {
    task: TaskData
}) {
    const style = {
        'position': 'absolute',
        'width': '10rem',
        'height': '1rem',
        'margin': '.75rem 0 0 0',
        'backgroundColor': '#8ee997',
        'box-shadow': '0 2px 4px #00000014'
    } as React.CSSProperties

    return (
        <div style={style}></div>
    )
}

export default function GanttTimeline(props: Props) {
    return (
        <div>
            <div className={styles.timeline}>
                <ScheduleBar task={props.task} />
            </div>
            {props.task.children.map((child) =>
                <GanttTimeline key={child.id} task={child} />)}
        </div>
    )
}
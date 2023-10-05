import { useRef } from 'react'
import GanttTask from './gantt-task'
import GanttTimeline from './gantt-timeline'
import { useGanntState } from './hooks'
import styles from './styles/gantt.module.css'
import { GanttData, TimelineColumn, ViewMode } from './types'

type Props = {
    style?: React.CSSProperties,

    model: GanttData,
    startDate: string,
    endDate: string,
    viewMode: ViewMode
}

function TimelineColumns(props: {
    columns: Array<TimelineColumn>
}) {
    return (
        <div className={styles.timelineHeader}>
            {props.columns.map((column) =>
                <div key={column.label} className={styles.columnHeader}>
                    <div className={styles.top}>
                        <span>{column.label}</span>
                    </div>
                    <div className={styles.subColumns}>
                        {column.children.map((subCol) =>
                            <div key={column.label + '_' + subCol.label} className={styles.column}>
                                <span>{subCol.label}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

function TimelineBg(props: {
    columns: Array<TimelineColumn>,
    expandedRowCount: number,
    remToPx: number
}) {
    return (
        <div className={styles.timelineBg}>
            {props.columns.map((column) =>
                column.children.map((subCol) =>
                    <div key={column.label + '_' + subCol.label} className={styles.timeline}
                        style={{ 'height': (props.expandedRowCount * props.remToPx * 2.5) + 'px' }} />
                )
            )}
        </div>
    )
}

export function Gantt(props: Props) {
    const refHScrollHeader = useRef<HTMLDivElement>(null)
    const refHScrollBody = useRef<HTMLDivElement>(null)
    const refLeftBody = useRef<HTMLDivElement>(null)
    const refRightBody = useRef<HTMLDivElement>(null)
    const refRightTopHeader = useRef<HTMLDivElement>(null)

    const [state] = useGanntState({
        model: props.model,
        startDate: props.startDate,
        endDate: props.endDate,
        viewMode: props.viewMode,
        refs: {
            refRightTopHeader,
            refHScrollHeader,
            refHScrollBody
        }
    })

    return (
        <div>
            {/* header */}
            <div className={styles.header}>
                {/* Left Pane */}
                <div style={{ 'width': state.hSlidePos + 'px' }} className={styles.left}>
                    <span>Task Name</span>
                </div>

                {/* Knob */}
                <div ref={refHScrollHeader} className={styles.hslide}></div>

                {/* Right Pane */}
                <div ref={refRightTopHeader} style={{ 'width': 'calc(80vw - ' + state.hSlidePos + 'px)' }}
                    className={styles.right + ' ' + styles.noscroll}>
                    <TimelineColumns columns={state.timelineColumns} />
                </div>
            </div>

            {/* body */}
            <div className={styles.body}>
                {/* Left Pane */}
                <div ref={refLeftBody} style={{ 'width': state.hSlidePos + 'px' }} className={styles.left}
                    onScroll={(e) => {
                        refRightBody.current!.scrollTop = (e.target as HTMLDivElement).scrollTop
                    }}>
                    {props.model.taskList.map((task, idx) => <GanttTask key={idx} task={task} depth={0} />)}
                </div>

                {/* Knob */}
                <div ref={refHScrollBody} className={styles.hslide}></div>

                {/* Right Pane */}
                <div ref={refRightBody} style={{ 'width': 'calc(80vw - ' + state.hSlidePos + 'px)' }} className={styles.right}
                    onScroll={(e) => {
                        refLeftBody.current!.scrollTop = (e.target as HTMLDivElement).scrollTop
                        refRightTopHeader.current!.scrollLeft = (e.target as HTMLDivElement).scrollLeft
                    }}>
                    <TimelineBg columns={state.timelineColumns} expandedRowCount={state.expandedRowCount} remToPx={state.remToPx} />
                    {props.model.taskList.map((task, idx) => <GanttTimeline key={idx} task={task} />)}
                </div>
            </div>
        </div>
    )
}
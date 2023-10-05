
export type TaskData = {
    id: string,
    taskName: string,
    startDateTime: string,
    endDateTime: string,
    children: Array<TaskData>
}

export type GanttData = {
    taskList: Array<TaskData>
}

export type TimelineColumn = {
    label: string,
    children: Array<TimelineSubColumn>
}

export type TimelineSubColumn = {
    label: string
}

export type ViewMode = 'YEAR' | 'MONTH' | 'DATE'
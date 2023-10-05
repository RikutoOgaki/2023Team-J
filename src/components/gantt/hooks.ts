import exp from 'constants'
import dayjs from 'dayjs'
import { RefObject, useEffect, useState } from 'react'
import { GanttData, TaskData, TimelineColumn, TimelineSubColumn, ViewMode } from './types'

type State = {
    timelineColumns: Array<TimelineColumn>,

    // slider
    hSlidePos: number,
    hSlidePrevX: number,
    hSlideActiveFlag: boolean,

    // Rows
    expandedRowCount: number

    // work
    remToPx: number
}

type Props = {
    model: GanttData,
    startDate: string,
    endDate: string,
    viewMode: ViewMode,
    refs: {
        refHScrollHeader: RefObject<HTMLDivElement>,
        refHScrollBody: RefObject<HTMLDivElement>,
        refRightTopHeader: RefObject<HTMLDivElement>
    }
}

function getExpandedRowCount(model: GanttData): number {
    let cnt = 0;

    for (let i = 0; i < model.taskList.length; i++) {
        cnt += getExpandedRowCountInner(model.taskList[i])
    }
    return cnt
}

function getExpandedRowCountInner(task: TaskData): number {
    if (task.children.length === 0) {
        return 1;
    }

    let cnt = 1;
    for (let i = 0; i < task.children.length; i++) {
        cnt += getExpandedRowCountInner(task.children[i])
    }

    return cnt
}

function convertDay(day: number) {
    return (['日', '月', '火', '水', '木', '金', '土'])[day]
}

function buildTimelineColumns(startDate: string, endDate: string, viewMode: string): Array<TimelineColumn> {
    const columnList: Array<TimelineColumn> = []

    let _startDate = dayjs(startDate)
    let _endDate = dayjs(endDate)

    if (_startDate.isAfter(_endDate, 'day')) {
        let wk = _endDate
        _startDate = _endDate
        _endDate = wk
    }

    if (viewMode === 'DATE') {
        const cntMonth = _endDate.diff(_startDate, 'month') + 1
        for (let i = 0; i < cntMonth; i++) {
            const column: TimelineColumn = {
                label: _startDate.year() + '年' + (_startDate.month() + 1 < 10 ? '0' + (_startDate.month() + 1) : String(_startDate.month() + 1)) + '月',
                children: []
            }

            const cntDate = (_startDate.daysInMonth() - _startDate.date()) + 1
            for (let k = 0; k < cntDate; k++) {
                const subColumn: TimelineSubColumn = {
                    label: (_startDate.date() < 10 ? '0' + _startDate.date() : String(_startDate.date())) + ' (' + convertDay(_startDate.day()) + ')'
                }
                column.children.push(subColumn)

                // next
                _startDate = _startDate.add(1, 'day')
            }
            columnList.push(column)
        }
    }

    return columnList
}

export function useGanntState(props: Props) {
    const [state, setState] = useState<State>({
        timelineColumns: buildTimelineColumns(props.startDate, props.endDate, props.viewMode),

        // slider
        hSlidePos: 0,
        hSlidePrevX: 0,
        hSlideActiveFlag: false,

        // Rows
        expandedRowCount: 0,

        // work
        remToPx: 0
    })

    const handleMouseDownForHScroll = (e: MouseEvent) => {
        setState({
            ...state,
            hSlidePrevX: e.clientX,
            hSlideActiveFlag: true
        })
    }
    const handleMouseMoveForHScroll = (e: MouseEvent) => {
        if (state.hSlideActiveFlag) {
            setState({
                ...state,
                hSlidePos: state.hSlidePos - (state.hSlidePrevX - e.clientX),
                hSlidePrevX: e.clientX
            })
        }
    }
    const handleMouseUpForHScroll = (e: MouseEvent) => {
        setState({
            ...state,
            hSlidePrevX: e.clientX,
            hSlideActiveFlag: false
        })
    }

    useEffect(() => {
        const expandedRowCount = getExpandedRowCount(props.model)

        setState({
            ...state,
            expandedRowCount: expandedRowCount,
            timelineColumns: buildTimelineColumns(props.startDate, props.endDate, props.viewMode)
        })
    }, [props.startDate, props.endDate, props.viewMode, props.model])

    useEffect(() => {
        const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize)
        const expandedRowCount = getExpandedRowCount(props.model)

        setState({
            ...state,
            hSlidePos: window.innerWidth / 3,
            remToPx,
            expandedRowCount
        })
    }, [])

    useEffect(() => {
        props.refs.refHScrollHeader.current?.addEventListener('mousedown', handleMouseDownForHScroll)
        props.refs.refHScrollBody.current?.addEventListener('mousedown', handleMouseDownForHScroll)

        window.addEventListener('mousemove', handleMouseMoveForHScroll)
        window.addEventListener('mouseup', handleMouseUpForHScroll)

        return () => {
            props.refs.refHScrollHeader.current?.removeEventListener('mousedown', handleMouseDownForHScroll)
            props.refs.refHScrollBody.current?.removeEventListener('mousedown', handleMouseDownForHScroll)
            window.removeEventListener('mousemove', handleMouseMoveForHScroll)
            window.removeEventListener('mouseup', handleMouseUpForHScroll)
        }
    }, [state])

    return [state]
}
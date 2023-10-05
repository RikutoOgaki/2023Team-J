import { Gantt } from '@/components/gantt/gantt'
import { GanttData } from '@/components/gantt/types'
import { useState } from 'react'

type State = {
    model: GanttData
}

function buildTestData(): GanttData {
    return {
        taskList: [
            {
                id: '1000',
                taskName: 'Parent1',
                startDateTime: '2023-02-25',
                endDateTime: '2023-03-20',
                children: [
                    {
                        id: '1001',
                        taskName: 'Parent1-Child1',
                        startDateTime: '2023-02-26',
                        endDateTime: '2023-02-28',
                        children: []
                    },
                    {
                        id: '1002',
                        taskName: 'Parent1-Child2',
                        startDateTime: '2023-02-28',
                        endDateTime: '2023-02-29',
                        children: []
                    }
                ]
            },
            {
                id: '2000',
                taskName: 'Parent2',
                startDateTime: '2023-02-01',
                endDateTime: '2023-02-15',
                children: []
            },
            {
                id: '2001',
                taskName: 'Parent3',
                startDateTime: '2023-02-01',
                endDateTime: '2023-02-15',
                children: []
            }
        ]
    }
}

export default function GanntTest() {
    const [state, setState] = useState<State>({
        model: buildTestData()
    })

    return (
        <Gantt
            style={{ 'width': '50rem' }}
            model={state.model}
            startDate='2023-01-01' endDate='2023-12-31'
            viewMode='DATE' />
    )
}
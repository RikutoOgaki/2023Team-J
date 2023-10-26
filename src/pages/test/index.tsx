import { useEffect, useReducer, useState } from 'react'
import { TrainSubData, TrainData } from '@/types/trainDataType'
import TestTrainData from './testComponent'





export default function Test() {

    // const iniState: State = {
    //     message: '',
    //     routes: {
    //         routes: []
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, iniState)

    // useEffect(() => {
    //     getAllTrainData(dispatch)
    // }, [])

    // console.log(state);

    const [home, setHome] = useState({
        useline: '',
        startHome: '',
        endHome: ''
    })
    const [state, setState] = useState<TrainData>({
        routes: [
            {
                trainline: '阪急京都本線',
                home: [
                    {
                        id: 1,
                        homename: '大阪梅田駅',
                        latitude: 0,
                        longitude: 0
                    },
                    {
                        id: 2,
                        homename: '十三駅',
                        latitude: 0,
                        longitude: 0
                    },
                    {
                        id: 3,
                        homename: '南方駅',
                        latitude: 0,
                        longitude: 0
                    },
                    {
                        id: 4,
                        homename: '崇禅寺駅',
                        latitude: 0,
                        longitude: 0
                    },
                    {
                        id: 5,
                        homename: '淡路駅',
                        latitude: 0,
                        longitude: 0
                    },
                    {
                        id: 6,
                        homename: '上新庄駅',
                        latitude: 0,
                        longitude: 0
                    },
                ]
            },
            {
                trainline: '大阪環状線',
                home: [
                    {
                        id: 1,
                        homename: '大阪駅',
                        latitude: 0,
                        longitude: 0
                    },
                    {
                        id: 2,
                        homename: '福島駅',
                        latitude: 0,
                        longitude: 0
                    },
                ]
            }
        ]
    })

    const [flg, setFlg] = useState(false)

    return (
        <>
            <input type="text" value={home.useline}
                onChange={(e) => {
                    setHome({
                        ...home,
                        useline: e.target.value
                    })
                }}
            />
            <input type="text" value={home.startHome}
                onChange={(e) => setHome({
                    ...home,
                    startHome: e.target.value
                })}
            />
            <input type="text" value={home.endHome}
                onChange={(e) => setHome({
                    ...home,
                    endHome: e.target.value
                })}
            />

            <button
                onClick={() => setFlg(true)}
            >検索する</button>

            {flg &&
                <TestTrainData
                    data={state}
                    trainLinename={home.useline}
                    starthomeName={home.startHome}
                    endhomeName={home.endHome}
                />
            }
        </>
    )
}
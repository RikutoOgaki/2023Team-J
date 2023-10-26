import { useState, useEffect } from 'react'
import { TrainData } from "@/types/trainDataType";

type Props = {
    data: TrainData,
    trainLinename: string,
    starthomeName: string,
    endhomeName: string
}

export default function TestTrainData(props: Props) {

    // 駅のデータ
    const [home, setHome] = useState<Props>({
        data: props.data,
        trainLinename: props.trainLinename,
        starthomeName: props.starthomeName,
        endhomeName: props.endhomeName
    })

    // 出発駅と到着駅のデータ
    useEffect(() => {
        setHome({
            ...home,
            data: props.data,
            trainLinename: props.trainLinename,
            starthomeName: props.starthomeName,
            endhomeName: props.endhomeName
        })
    }, [props])


    // ｒoutesのデータの中から、入力された出発駅のデータだけ抜き取る関数Component


    // 路線名
    const trainlineData = home.data.routes.find((route) => route.trainline === home.trainLinename)
    if (!trainlineData) {
        return <div>路線名が見つかりませんでした</div>
    }

    // 出発駅の入力された値の検索 
    const matchStartHomeName = trainlineData?.home.find((starthome) => starthome.homename === home.starthomeName)
    if (!matchStartHomeName) {
        return <div>出発駅名が見つかりませんでした</div>
    }

    // 到着駅の入力された値の検索
    const matchEndHomeName = trainlineData.home.find((endstate) => endstate.homename === home.endhomeName)
    if (!matchEndHomeName) {
        return <div>到着駅名が見つかりませんでした</div>
    }

    return (
        <>
            <div>
                <p>路線：{trainlineData.trainline}</p>
                <p>出発駅：{matchStartHomeName.homename}</p>
                <p>到着駅：{matchEndHomeName.homename}</p>
            </div>
        </>
    )
}
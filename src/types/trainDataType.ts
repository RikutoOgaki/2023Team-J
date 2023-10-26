export type TrainDataItem = {
    id: number, // 識別子
    homename: string, // 駅名
    latitude: number, // 駅の緯度
    longitude: number // 駅の経度
}

export type TrainSubData = {
    trainline: string,
    home: Array<TrainDataItem>
}

export type TrainData = {
    routes: Array<TrainSubData>
}
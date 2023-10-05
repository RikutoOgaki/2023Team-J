
export type Action =
    { acitonType: 'ACTION_MOVE_ENEMY_UP' } |
    { acitonType: 'ACTION_MOVE_ENEMY_DOWN' } |
    { acitonType: 'ACTION_MOVE_ENEMY_LEFT' } |
    { acitonType: 'ACTION_MOVE_ENEMY_RIGHT' } |

    { acitonType: 'ACTION_MOVE_UP' } |
    { acitonType: 'ACTION_MOVE_DOWN' } |
    { acitonType: 'ACTION_MOVE_LEFT' } |
    { acitonType: 'ACTION_MOVE_RIGHT' }

export type State = {
    count: number,

    // player
    x: number,
    y: number,

    // enemy
    x2: number,
    y2: number,

    // map
    mapDataSrc: Array<Array<number>>
}

export function reducer(state: State, action: Action) {
    switch (action.acitonType) {
        case 'ACTION_MOVE_ENEMY_UP': return {
            ...state,
            y2: state.y2 - 1
        }
        case 'ACTION_MOVE_ENEMY_DOWN': return {
            ...state,
            y2: state.y2 + 1
        }
        case 'ACTION_MOVE_ENEMY_LEFT': return {
            ...state,
            x2: state.x2 - 1
        }
        case 'ACTION_MOVE_ENEMY_RIGHT': return {
            ...state,
            x2: state.x2 + 1
        }

        case 'ACTION_MOVE_UP': return {
            ...state,
            y: state.y - 1
        }
        case 'ACTION_MOVE_DOWN': return {
            ...state,
            y: state.y + 1
        }
        case 'ACTION_MOVE_LEFT': return {
            ...state,
            x: state.x - 1
        }
        case 'ACTION_MOVE_RIGHT': return {
            ...state,
            x: state.x + 1
        }
    }

    return state
}
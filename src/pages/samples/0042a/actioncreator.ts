import { Action, State } from './reducer'

export async function doIntervalProc(
    dispatch: React.Dispatch<Action>,
    state: State) {

    if (state.x2 < state.x) {
        dispatch({ acitonType: 'ACTION_MOVE_ENEMY_RIGHT' })
    }
    if (state.x2 > state.x) {
        dispatch({ acitonType: 'ACTION_MOVE_ENEMY_LEFT' })
    }
    if (state.y2 < state.y) {
        dispatch({ acitonType: 'ACTION_MOVE_ENEMY_DOWN' })
    }
    if (state.y2 > state.y) {
        dispatch({ acitonType: 'ACTION_MOVE_ENEMY_UP' })
    }
}

export async function doKeydownProc(
    dispatch: React.Dispatch<Action>,
    e: KeyboardEvent,
    state: State) {

    if (e.code === 'ArrowUp') {
        dispatch({ acitonType: 'ACTION_MOVE_UP' })
    } else if (e.code === 'ArrowDown') {
        dispatch({ acitonType: 'ACTION_MOVE_DOWN' })
    } else if (e.code === 'ArrowLeft') {
        dispatch({ acitonType: 'ACTION_MOVE_LEFT' })
    } else if (e.code === 'ArrowRight') {
        dispatch({ acitonType: 'ACTION_MOVE_RIGHT' })
    }
}
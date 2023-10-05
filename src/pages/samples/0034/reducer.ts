import { Todo } from './types'

export type Actions = {
    actionType: 'ADD_TODO_REQUEST'
} | {
    actionType: 'ADD_TODO_SUCCESS',
    payload: {
        list: Array<Todo>
    }
} | {
    actionType: 'ADD_TODO_FAILURE'
} | {
    actionType: 'LIST_TODO_REQUEST'
} | {
    actionType: 'LIST_TODO_SUCCESS',
    payload: {
        list: Array<Todo>
    }
} | {
    actionType: 'LIST_TODO_FAILURE'
}

export type State = {
    message: string,
    todoList: Array<Todo>
}

export function reducer(state: State, action: Actions) {
    switch (action.actionType) {
        case 'ADD_TODO_REQUEST': return {
            ...state,
            message: '処理開始'
        }
        case 'ADD_TODO_SUCCESS': return {
            ...state,
            message: 'TODO追加に成功',
            todoList: action.payload.list
        }
        case 'ADD_TODO_FAILURE': return {
            ...state,
            message: 'TODO追加に失敗'
        }

        case 'LIST_TODO_REQUEST': return {
            ...state,
            message: 'TODO検索を開始'
        }
        case 'LIST_TODO_SUCCESS': return {
            ...state,
            message: 'TODO検索に成功',
            todoList: action.payload.list
        }
        case 'LIST_TODO_FAILURE': return {
            ...state,
            message: 'TODO検索に失敗'
        }
    }
} 
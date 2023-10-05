
export type Action =
    {
        actionType: 'FIND_PRODUCTS_REQUEST'
    } |
    {
        actionType: 'FIND_PRODUCTS_SUCCESS',
        payload: {
            offset: number, totalRecords: number, list: Array<Product>
        }
    } |
    {
        actionType: 'FIND_PRODUCTS_FAILURE'
    }

export type Product = {
    id: number,
    code: string,
    name: string,
    category: string,
    quantity: number
}

export type State = {
    isWaiting: boolean,
    offset: number,
    products: Array<Product>,
    totalRecords: number
}

export function reducer(state: State, action: Action) {
    switch (action.actionType) {
        case 'FIND_PRODUCTS_REQUEST': return {
            ...state,
            isWaiting: true
        }
        case 'FIND_PRODUCTS_SUCCESS': return {
            ...state,
            offset: action.payload.offset,
            totalRecords: action.payload.totalRecords,
            products: action.payload.list,
            isWaiting: false
        }
        case 'FIND_PRODUCTS_FAILURE': return {
            ...state,
            isWaiting: false
        }
    }
}
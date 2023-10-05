
export type Action = {
    actionType: 'GET_PRODUCTS_REQUEST'
} | {
    actionType: 'GET_PRODUCTS_SUCCESS',
    payload: {
        product: Product
    }
} | {
    actionType: 'GET_PRODUCTS_FAILURE'
} | {
    actionType: 'EDIT',
    payload: {
        editTarget: string,
        editValue: string
    }
}

export type Product = {
    id: number,
    code: string,
    name: string,
    category: string,
    quantity: string
}

export type State = {
    isWaiting: boolean,
    product?: Product
}

export function reducer(state: State, action: Action): State {
    switch (action.actionType) {
        case 'GET_PRODUCTS_REQUEST': return {
            ...state,
            isWaiting: true
        }
        case 'GET_PRODUCTS_SUCCESS': return {
            ...state,
            isWaiting: false,
            product: action.payload.product
        }
        case 'GET_PRODUCTS_FAILURE': return {
            ...state,
            isWaiting: false
        }
        case 'EDIT': {
            if (state.product === undefined) {
                return state
            }

            // stateを直接編集することが許されていことと同様に
            // stateの中にあるproductも直接編集はNG。
            // productを編集するには、現状のproduct(state.product)を複製して
            // 複製したproductを更新する必要がある。(shallow copy ...)
            switch (action.payload.editTarget) {
                case 'code': return {
                    ...state,
                    product: {
                        ...state.product,
                        code: action.payload.editValue
                    }
                }
                case 'name': return {
                    ...state,
                    product: {
                        ...state.product,
                        name: action.payload.editValue
                    }
                }
                case 'category': return {
                    ...state,
                    product: {
                        ...state.product,
                        category: action.payload.editValue
                    }
                }
                case 'quantity': return {
                    ...state,
                    product: {
                        ...state.product,
                        quantity: action.payload.editValue
                    }
                }
            }
            return state
        }
    }
}
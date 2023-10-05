import { Action } from './reducer'

export function edit(dispatch: React.Dispatch<Action>,
    editTarget: string,
    editValue: string) {
    dispatch({
        actionType: 'EDIT',
        payload: {
            editTarget,
            editValue
        }
    })
}

export async function getProduct(dispatch: React.Dispatch<Action>, id: string) {
    // 処理開始
    dispatch({ actionType: 'GET_PRODUCTS_REQUEST' })

    // 検索
    try {
        const urlParams = new URLSearchParams({
            id: String(id)
        })

        const res = await fetch('/api/sample/0039/get-product?' + urlParams.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            }
        })

        if (res.status !== 200) {
            // ステータスコードが200以外のため失敗
            dispatch({ actionType: 'GET_PRODUCTS_FAILURE' })
            return
        }

        const result = await res.json()

        // 成功
        dispatch({
            actionType: 'GET_PRODUCTS_SUCCESS',
            payload: {
                product: result.product
            }
        })
    } catch (e) {
        // 何らかの例外が発生したため失敗
        console.log(e)
        dispatch({ actionType: 'GET_PRODUCTS_FAILURE' })
    }
}
import { DataTableFilterMeta } from 'primereact/datatable'
import { Action } from './reducer'

export async function findProducts(dispatch: React.Dispatch<Action>, offset: number, filters: DataTableFilterMeta) {
    // 処理開始
    dispatch({
        actionType: 'FIND_PRODUCTS_REQUEST',
        payload: {
            offset,
            filters
        }
    })

    // 検索
    try {
        const urlParams = new URLSearchParams({
            offset: String(offset),
            filters: JSON.stringify(filters)
        })

        const res = await fetch('/api/sample/0041/find-products?' + urlParams.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            }
        })

        if (res.status !== 200) {
            // ステータスコードが200以外のため失敗
            dispatch({ actionType: 'FIND_PRODUCTS_FAILURE' })
            return
        }

        const result = await res.json()

        // 成功
        dispatch({
            actionType: 'FIND_PRODUCTS_SUCCESS',
            payload: {
                list: result.list,
                totalRecords: result.totalRecords
            }
        })
    } catch (e) {
        // 何らかの例外が発生したため失敗
        console.log(e)
        dispatch({ actionType: 'FIND_PRODUCTS_FAILURE' })
    }
}
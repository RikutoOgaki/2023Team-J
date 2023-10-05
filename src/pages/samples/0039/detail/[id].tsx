import { useRouter } from 'next/router'
import { useEffect, useReducer } from 'react'
import { getProduct, edit } from './actioncreator'
import { reducer } from './reducer'
import { InputText } from 'primereact/inputtext'
import { ProgressSpinner } from 'primereact/progressspinner'

export default function SampleDetailForm() {
    const [state, dispatch] = useReducer(reducer, {
        isWaiting: false
    })
    const router = useRouter()

    useEffect(() => {
        const id = typeof router.query.id === 'string' ? router.query.id : undefined
        if (id) {
            getProduct(dispatch, id)
        }
    }, [router.query.id])

    return (
        <div>
            <h1>DataTable - Lazy Load - 詳細画面</h1>

            {state.isWaiting &&
                <ProgressSpinner />
            }

            <InputText value={state.product?.code}
                onChange={(e) => edit(dispatch, 'code', e.target.value)} />
            <InputText value={state.product?.name}
                onChange={(e) => edit(dispatch, 'name', e.target.value)} />
            <InputText value={state.product?.category}
                onChange={(e) => edit(dispatch, 'category', e.target.value)} />
            <InputText value={String(state.product?.quantity)}
                onChange={(e) => edit(dispatch, 'quantity', e.target.value)} />
        </div>
    )
}
import { useRouter } from 'next/router'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { ProgressSpinner } from 'primereact/progressspinner'
import { useEffect, useReducer } from 'react'
import { findProducts } from './actioncreator'
import { reducer } from './reducer'

export default function SampleForm0038() {
    const [state, dispatch] = useReducer(reducer, {
        isWaiting: false,
        offset: 0,
        totalRecords: 0,
        products: []
    })
    const router = useRouter()

    useEffect(() => {
        findProducts(dispatch, 0)
    }, [])

    return (
        <div>
            <h1>DataTable - Lazy Load</h1>

            {state.isWaiting &&
                <ProgressSpinner />
            }

            <DataTable value={state.products} lazy paginator selectionMode='single'
                first={state.offset} rows={10} totalRecords={state.totalRecords}
                onPage={(e) => {
                    findProducts(dispatch, e.first)
                }}
                onRowSelect={(e) => {
                    // https://nextjs.org/docs/api-reference/next/router
                    router.push({
                        pathname: '/samples/0039/detail/[id]',
                        query: {
                            id: e.data.id
                        }
                    })
                }}>
                <Column field='code' header='Code'></Column>
                <Column field='name' header='Name'></Column>
                <Column field='category' header='Category'></Column>
                <Column field='quantity' header='Quantity'></Column>
            </DataTable>
        </div>
    )
}
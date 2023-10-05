import { useRouter } from 'next/router'
import { Column } from 'primereact/column'
import { DataTable, DataTableFilterEvent, DataTablePageEvent } from 'primereact/datatable'
import { ProgressSpinner } from 'primereact/progressspinner'
import { useEffect, useReducer } from 'react'
import { findProducts } from './actioncreator'
import { reducer } from './reducer'

export default function SampleForm0041() {
    const [state, dispatch] = useReducer(reducer, {
        isWaiting: false,
        offset: 0,
        totalRecords: 0,
        products: [],
        filters: {
            code: {
                value: '', matchMode: 'contains'
            }
        }
    })
    const router = useRouter()

    useEffect(() => {
        findProducts(dispatch, 0, state.filters)
    }, [])

    return (
        <div>
            <h1>DataTable - Lazy Load</h1>

            <DataTable value={state.products} lazy paginator selectionMode='single'
                first={state.offset} rows={10} totalRecords={state.totalRecords}
                filters={state.filters} filterDisplay='row'
                onFilter={(e: DataTableFilterEvent) => {
                    console.log(e)
                    findProducts(dispatch, e.first, e.filters)
                }}
                onPage={(e: DataTablePageEvent) => {
                    findProducts(dispatch, e.first, state.filters)
                }}>
                <Column field='code' header='Code' filter></Column>
                <Column field='name' header='Name'></Column>
                <Column field='category' header='Category'></Column>
                <Column field='quantity' header='Quantity'></Column>
            </DataTable>

            {state.isWaiting &&
                <ProgressSpinner />
            }
        </div>
    )
}
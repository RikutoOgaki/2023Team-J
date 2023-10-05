import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useState } from 'react'

export default function SampleForm0037() {
    const [state, setState] = useState({
        products: [
            { code: '1000', name: 'name1', category: 'cat1', quantity: '1' },
            { code: '2000', name: 'name2', category: 'cat2', quantity: '3' }
        ]
    })

    return (
        <div>
            <h1>DataTable</h1>

            <DataTable value={state.products}>
                <Column field='code' header='Code'></Column>
                <Column field='name' header='Name'></Column>
                <Column field='category' header='Category'></Column>
                <Column field='quantity' header='Quantity'></Column>
            </DataTable>
        </div>
    )
}
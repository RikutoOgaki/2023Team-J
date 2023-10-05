import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useState, useEffect } from 'react'

export default function SampleForm0038() {
    const [state, setState] = useState({
        products: []
    })

    useEffect(() => {
        const findProducts = async () => {
            const urlParams = new URLSearchParams({
                offset: '0'
            })

            const res = await fetch('/api/sample/0038/find-products?' + urlParams.toString(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Pragma': 'no-cache',
                    'Cache-Control': 'no-cache'
                }
            })

            const result = await res.json()
            setState({
                ...state,
                products: result.list
            })

            console.log(result)
        }

        findProducts()
    }, [])

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
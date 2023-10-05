import { json } from 'stream/consumers'
import { Action } from './reducer'

export async function addAccount(dispatch: React.Dispatch<Action>, userid: string, userpass: string) {

    console.log(userid, userpass);
    dispatch({ actionType: 'INCERT_IDPASS_REQUEST' })


    try {
        const res = await fetch('/api/sample/0047/addAccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
                userid, userpass
            })
        })

        console.log(userid, userpass);
        if (res.status !== 200) {
            dispatch({ actionType: 'INCERT_IDPASS_FAILURE' })
        }

        const result = await res.json()

        dispatch({
            actionType: 'INCERT_IDPASS_SUCCESS',
            payload: {
                userid: result.userid,
                userpass: result.userpass
            }
        })

    } catch (e) {
        dispatch({ actionType: 'INCERT_IDPASS_FAILURE' })
    }
}
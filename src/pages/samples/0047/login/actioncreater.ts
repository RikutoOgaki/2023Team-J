import { log } from 'console'
import { Action } from './reducer'

export async function login(dispatch: React.Dispatch<Action>, userid: string, userpass: string) {

    try {
        const res = await fetch('/api/sample/0047/login', {
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
        dispatch({ actionType: 'GET_ACCOUNT_REQUEST' })

        if (res.status !== 200) {
            const result = await res.json()
            dispatch({
                actionType: 'GET_ACCOUNT_FAILURE',
                payload: {
                    message: result.result
                }
            })
            return
        }
        else {
            const result = await res.json()
            dispatch({
                actionType: 'GET_ACCOUNT_REQUEST'
            })

            dispatch({
                actionType: 'GET_ACCOUNT_SUCCESS',
                payload: {
                    userid: result.userid,
                    userpass: result.userpass,
                    message: result.result
                }
            })
        }
    } catch (e) {
    }
}
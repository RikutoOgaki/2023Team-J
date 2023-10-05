import {Action} from './reducer'


export async function getTime(dispatch: React.Dispatch<Action>){

    dispatch({actionType:'GET_TIME_REQUEST'})

    try{
        const res = await fetch('/api/sample/00xx/getTime', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            }
        })

        if(res.status !==200){
            dispatch({actionType:'GET_TIME_FAILURE'})
            return
        }
        
        const result = await res.json()
        dispatch({
            actionType:'GET_TIME_SUCCESS',
            payload:{
                time:result.time
            }
        })

    } catch (e){
        dispatch({actionType:'GET_TIME_FAILURE'})
    }
}

export type Action = 
{actionType:'GET_TIME_REQUEST'} |
{actionType:'GET_TIME_SUCCESS',
    payload:{
        time:string
    }
} |
{actionType:'GET_TIME_FAILURE'} 

export type State = {
    time:string,
    isWaiting:boolean
}

export function reducer(state : State, action : Action) : State {
    switch(action.actionType){
        case 'GET_TIME_REQUEST':return{
            ...state,
            isWaiting:true
        }
        case 'GET_TIME_SUCCESS':return {
            ...state,
            time:action.payload.time,
            isWaiting:false
        }
        case 'GET_TIME_FAILURE':return{
            ...state,
            isWaiting:false
        }
        default: return state
    }
}
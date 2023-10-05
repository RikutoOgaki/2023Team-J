export type Action = 
{actionType:'GET_TIME_REQUEST'} |
{actionType:'GET_TIME_SUCCESS',
    payload:{
        time:string
    }
} |
{actionType:'GET_TIME_FAILURE'} 

export type State = {
    time:string
}

export function reducer(state:State,action:Action):State {
    switch(action.actionType){
        case 'GET_TIME_REQUEST':return{
            ...state
        }
        case 'GET_TIME_SUCCESS':return{
            ...state,
            time:action.payload.time
        }
        case 'GET_TIME_FAILURE':return{
            ...state
        }
        default : return state
    }
}

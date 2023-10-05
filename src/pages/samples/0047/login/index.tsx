import { useEffect, useReducer } from 'react'
import { reducer } from './reducer'
import { login } from './actioncreater'
import { useRouter } from 'next/router'
import style from './components/index.module.css'
import { InputText } from 'primereact/inputtext'



export default function LoginUser() {

    const [state, dispatch] = useReducer(reducer, {
        userid: '',
        userpass: '',
        message: '',
        isWating: false
    })

    const router = useRouter()


    useEffect(() => {
        if (state.isWating) {
            router.push('/samples/0047')
        }
    }, [state.isWating])

    return (
        <>
            <div className={style.wrap}>
                <div className={style.loginbox}>
                    <div className={style.textbox}>
                        <h2>login</h2>
                    </div>
                    <div className={style.inputbox}>
                        <p style={{ 'color': 'red' }}>{state.message}</p>
                        <InputText value={state.userid}
                            onChange={(e) => {
                                dispatch({
                                    actionType: 'GET_ACCOUNT_SUCCESS',
                                    payload: {
                                        ...state,
                                        userid: e.target.value
                                    }
                                })
                            }}
                        ></InputText>
                        <InputText type="text" value={state.userpass}
                            onChange={(e) => {
                                dispatch({
                                    actionType: 'GET_ACCOUNT_SUCCESS',
                                    payload: {
                                        ...state,
                                        userpass: e.target.value
                                    }
                                })
                            }}
                        />
                        <InputText type="button" value="ログイン"
                            onClick={() => login(dispatch, state.userid, state.userpass)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
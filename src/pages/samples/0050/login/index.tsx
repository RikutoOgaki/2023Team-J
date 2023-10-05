import { useEffect, useReducer } from 'react'
import { reducer } from './reducer'
import { login } from './actioncreater'
import { useRouter } from 'next/router'
import style from './components/index.module.css'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'



export default function LoginUser() {

    const [state, dispatch] = useReducer(reducer, {
        userid: '',
        userpass: '',
        message: '',
        wate: false
    })

    const router = useRouter()


    useEffect(() => {
        if (state.wate) {
            router.push('/samples/0050')
        }
    }, [state.wate])

    return (
        <>
            <div className={style.wrap}>
                <p className={style.text}>useridとuserpassを入力してください。</p>
                <div className={style.loginbox}>
                    <div className={style.textbox}>
                        <h2>Login</h2>
                    </div>
                    <div className={style.inputbox}>
                        <p style={{ 'color': 'red' }}>{state.message}</p>
                        <InputText value={state.userid} placeholder='userid'
                            onChange={(e) => {
                                dispatch({
                                    actionType: 'GET_ACCOUNT_SUCESSTEXT',
                                    payload: {
                                        ...state,
                                        userid: e.target.value
                                    }
                                })
                            }}
                        ></InputText>
                        <InputText type="text" value={state.userpass} placeholder='userpass'
                            onChange={(e) => {
                                dispatch({
                                    actionType: 'GET_ACCOUNT_SUCESSTEXT',
                                    payload: {
                                        ...state,
                                        userpass: e.target.value
                                    }
                                })
                            }}
                        />
                        <Button
                            onClick={() => login(dispatch, state.userid, state.userpass)}
                        >ログイン
                        </Button >
                    </div>
                </div>
                <p onClick={() => router.push('/samples/0050/addAccount')} className={style.addaccount}>アカウントがない方はこちら</p>
            </div>
        </>
    )
}
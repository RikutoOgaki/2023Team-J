import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import style from './components/index.module.css'
import { reducer } from './reducer'
import { useReducer } from 'react';
import { addAccount } from './actioncreater';
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function CreateUser() {

    const [state, dispatch] = useReducer(reducer, {
        userid: '',
        userpass: '',
        isWating: false
    })

    const [add, setAdd] = useState('')


    const router = useRouter()

    return (
        <>
            <div className={style.wrap}>
                <div className={style.textbox}>
                    <h1>アカウント登録フォーム</h1>
                    <p>お客様のご自身で使用になられるIDとPassWordをご入力してください。</p>
                </div>
                <div className={style.cardbox}>
                    <div className={style.colorbox}>
                        <p className={style.text}>アカウント登録</p>
                    </div>
                    <div className={style.inputbox}>
                        {/* <p>UserId</p> */}
                        <InputText
                            placeholder='userid'
                            onChange={(e) => {
                                dispatch({
                                    actionType: 'INCERT_IDPASS_SUCCESS',
                                    payload: {
                                        ...state,
                                        userid: e.target.value
                                    }
                                })
                            }}
                        ></InputText>
                        {/* <p>UserPass</p> */}
                        <InputText
                            placeholder='userpass'
                            onChange={(e) => {
                                dispatch({
                                    actionType: 'INCERT_IDPASS_SUCCESS',
                                    payload: {
                                        ...state,
                                        userpass: e.target.value
                                    }
                                })
                            }}
                        ></InputText>
                        <Button
                            onClick={() => addAccount(dispatch, state.userid, state.userpass)}
                        >登録</Button>
                    </div>
                </div>
                <p onClick={() => router.push('/samples/0050/login')} className={style.loginback}>Login画面に戻る</p>
            </div>
        </>
    )
}
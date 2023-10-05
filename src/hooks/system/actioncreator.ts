import { NextRouter } from 'next/router'
import React from 'react'
import { ACTIONTYPE } from './reducer'
import { msg0001 } from '@/const/message'

export async function login(dispatch: React.Dispatch<ACTIONTYPE>, router: NextRouter, userId: string, pass: string) {
    dispatch({ type: 'LOGIN_REQUEST', payload: { userId, pass } })

    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
                userId,
                pass
            })
        })

        if (res.status === 200) {
            const result = await res.json()
            dispatch({ type: 'LOGIN_SUCCESS', payload: null })
            router.push('/home')
        } else {
            dispatch({ type: 'LOGIN_FAILURE', payload: null })
            error(dispatch, msg0001())
        }
    } catch (e) {
        dispatch({ type: 'LOGIN_FAILURE', payload: null })
        systemError(dispatch)
    }
}

export async function logout(dispatch: React.Dispatch<ACTIONTYPE>, router: NextRouter) {
    dispatch({ type: 'LOGOUT_REQUEST', payload: null })

    try {
        const res = await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
            })
        })

        if (res.status === 200) {
            const result = await res.json()
            dispatch({ type: 'LOGOUT_SUCCESS', payload: null })
            router.push('/')
        } else {
            dispatch({ type: 'LOGOUT_FAILURE', payload: null })
            systemError(dispatch)
        }
    } catch (e) {
        dispatch({ type: 'LOGOUT_FAILURE', payload: null })
        systemError(dispatch)
    }
}

export async function verifySession(dispatch: React.Dispatch<ACTIONTYPE>) {
    dispatch({ type: 'VERIFY_SESSION_REQUEST', payload: null })

    try {
        const res = await fetch('/api/auth/verify-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify({
            })
        })

        if (res.status === 200) {
            const result = await res.json()
            dispatch({
                type: 'VERIFY_SESSION_SUCCESS',
                payload: {
                    isLoggedin: result.isLoggedin
                }
            })
        } else {
            dispatch({ type: 'VERIFY_SESSION_FAILURE', payload: null })
        }
    } catch (e) {
        dispatch({ type: 'VERIFY_SESSION_FAILURE', payload: null })
        systemError(dispatch)
    }
}

export async function showMessage(dispatch: React.Dispatch<ACTIONTYPE>, message: string) {
    dispatch({ type: 'SHOW_MESSAGE', payload: { message } })
}

export async function hideMessage(dispatch: React.Dispatch<ACTIONTYPE>) {
    dispatch({ type: 'HIDE_MESSAGE', payload: null })
}

function error(dispatch: React.Dispatch<ACTIONTYPE>, message: string) {
    dispatch({ type: 'SHOW_MESSAGE', payload: { message } })
}

function systemError(dispatch: React.Dispatch<ACTIONTYPE>) {
    dispatch({ type: 'SHOW_MESSAGE', payload: { message: '予期しないエラーが発生しました。' } })
}
import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInData, signInI } from '../common/data'
import { InputWithLabel } from '../components/InputWithLabel'

export const Signin = () => {

    const { title, fields, btnText } = signInData

    const defaultState: signInI = {
        email: '',
        password: ''
    }
    const [error, setError] = useState(false)
    const [pageState, setPageState] = useState(defaultState)
    const navigate = useNavigate()

    const handleLogin = async (e: any) => {
        e.preventDefault()
        Auth.signIn(pageState.email, pageState.password).then(response => {
            navigate('home')
        }).catch(() => {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 4000)
        })
    }

    return (
        <div className='relative flex flex-col justify-center min-h-screen overflow-hidden items-center'>
            {error && (
                <div className="toast toast-top toast-start">
                    <div className="alert alert-error">
                        <div>
                            <span>Credenciales invalidas, intenta de nuevo.</span>
                        </div>
                    </div>
                </div>
            )}
            <div className='rounded-3xl w-full p-6 m-auto border-t-4 shadow-md border-top lg:max-w-md bg-secondary/50'>
                <h1 className="text-3xl font-bold text-center">{title}</h1>
                <form className="p-6 justify-center items-center flex-col flex">
                    {fields.map(element => {
                        const { label, placeholder, id } = element
                        const value = pageState[id]
                        const handleChange = (e: any) => {
                            pageState[id] = e.target.value
                            setPageState({ ...pageState })
                        }
                        return (
                            <InputWithLabel key={id} label={label} placeholder={placeholder} value={value} handleChange={handleChange} />
                        )
                    })}
                    <button
                        onClick={handleLogin}
                        className="btn w-full mt-6 max-w-xs rounded-3xl">
                        {btnText}
                    </button>
                </form>
            </div>
        </div>
    )
}

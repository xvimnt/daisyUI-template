import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInData, signInDefaultState } from '../common/data'
import { InputWithLabel } from '../components/InputWithLabel'

export const SignIn = () => {

    const { title, subtitle, fields, btnText, errorText, forgotPasswordText, signUpText } = signInData

    const [error, setError] = useState(false)
    const [pageState, setPageState] = useState(signInDefaultState)
    const navigate = useNavigate()
    useEffect(() => {
        Auth.currentUserInfo().then((user) => {
            if(user) {
                navigate('home')
            }
        })
    }, [])

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
        <div className="hero min-h-screen bg-base-200">
            {error && (
                <div className="toast toast-top toast-start">
                    <div className="alert alert-error">
                        <div>
                            <span>{errorText}</span>
                        </div>
                    </div>
                </div>
            )}
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{subtitle}</p>
                </div>
                <div className="rounded-2xl card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        {fields.map(element => {
                            const { label, type, placeholder, id } = element
                            const value = pageState[id]
                            const handleChange = (e: any) => {
                                pageState[id] = e.target.value
                                setPageState({ ...pageState })
                            }
                            return (
                                <InputWithLabel type={type} key={id} label={label} placeholder={placeholder} value={value} handleChange={handleChange} />
                            )
                        })}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-3xl" onClick={handleLogin}>{btnText}</button>
                        </div>
                        <Link to='signup' className='font-semibold text-secondary mt-4 text-center'>
                            {signUpText}
                        </Link>
                        <Link to='forgot-password' className='font-semibold text-secondary text-center'>
                            {forgotPasswordText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

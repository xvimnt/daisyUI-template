import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUpData, signUpDefaultState } from '../common/data'
import { InputWithLabel } from '../components/InputWithLabel'

export const SignUp = () => {

    const { title, subtitle, fields, btnText, errorText, signInText } = signUpData

    const [error, setError] = useState(false)
    const [pageState, setPageState] = useState(signUpDefaultState)
    const navigate = useNavigate()

    const handleSignUp = async (e: any) => {
        e.preventDefault()
        try {
            if (pageState.password === pageState.confirmPassword) {
                await Auth.signUp({
                    username: pageState.email,
                    password: pageState.password,
                    attributes: {
                      nickname: pageState.email,          // optional
                      // other custom attributes 
                    },
                    autoSignIn: { // optional - enables auto sign in after user is confirmed
                      enabled: true,
                    }
                  })
                navigate(`/verify/${encodeURI(pageState.email)}`)
            } else {
                throw new Error()
            }
        } catch (e) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 4000)
        }
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
                                <InputWithLabel key={id} label={label} type={type} placeholder={placeholder} value={value} handleChange={handleChange} />
                            )
                        })}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-3xl" onClick={handleSignUp}>{btnText}</button>
                        </div>
                        <Link to='/' className='font-semibold text-secondary mt-4 text-center'>
                            {signInText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { verifyData, verifyDefaultState } from '../common/data'
import { InputWithLabel } from '../components/InputWithLabel'

export const Verify = () => {

    const { title, subtitle, fields, btnText, btn2Text, errorText, resendText, signInText } = verifyData
    const { username } = useParams()
    if(!username) return <></>
    const email = decodeURI(username)

    const [error, setError] = useState(false)
    const [resend, setResend] = useState(false)
    const [pageState, setPageState] = useState(verifyDefaultState)
    const navigate = useNavigate()

    const handleVerify = async (e: any) => {
        e.preventDefault()
        try {
            await Auth.confirmSignUp(email, pageState.code)
            navigate('/home')
        } catch (e) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 4000)
        }
    }

    const handleResend = async (e: any) => {
        e.preventDefault()
        try {
            await Auth.resendSignUp(email)
            setResend(true)
            setTimeout(() => {
                setResend(false)
            }, 4000)
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
            {resend && (
                <div className="toast toast-top toast-start">
                    <div className="alert alert-success">
                        <div>
                            <span>{resendText}</span>
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
                        <div className="form-control mt-6 btn-group flex flex-row rounded-3xl">
                            <button className="btn btn-secondary w-[50%]" onClick={handleVerify}>{btnText}</button>
                            <button className="btn btn-primary w-[50%]" onClick={handleResend}>{btn2Text}</button>
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

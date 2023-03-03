import { useState } from 'react'
import { signInData, signInI } from '../common/data'
import { InputWithLabel } from '../components/InputWithLabel'

export const Signin = () => {

    const defaultState: signInI = {
        email: '',
        password: ''
    }
    const [pageState, setPageState] = useState(defaultState)

    return (
        <div className='relative flex flex-col justify-center min-h-screen overflow-hidden items-center'>
            <div className='rounded-3xl w-full p-6 m-auto border-t-4 shadow-md border-top lg:max-w-md bg-secondary/50'>
                <h1 className="text-3xl font-bold text-center">Ingresa</h1>
                <form className="p-6 justify-center items-center flex-col flex">
                    {signInData.map(element => {
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
                        className="btn w-full mt-6 max-w-xs rounded-3xl">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

// Sign in page

export interface signInI {
    email: string,
    password: string
}

interface signInDataI {
    label: string,
    placeholder: string,
    id: 'email' | 'password'
}

export const signInData: signInDataI[] = [
    {
        label: 'Cual es tu usuario?',
        placeholder: 'ejemplo@email.com',
        id: 'email'
    }, {
        label: 'Cual es tu contraseña?',
        placeholder: 'ejemplo123',
        id: 'password'
    },
]
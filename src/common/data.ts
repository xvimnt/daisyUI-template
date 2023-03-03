// Sign in page

export interface signInI {
    email: string,
    password: string
}

interface signInDataFieldsI {
    label: string,
    placeholder: string,
    id: 'email' | 'password'
}

interface signInDataI {
    title: string,
    btnText: string,
    fields: signInDataFieldsI[]
}

export const signInData: signInDataI =
{
    title: 'Login',
    btnText: 'Ingresar',
    fields: [
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
}
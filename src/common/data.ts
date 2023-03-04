// Sign in page

export interface signInI {
    email: string,
    password: string
}

interface signInDataFieldsI {
    label: string,
    placeholder: string,
    id: 'email' | 'password',
    type: string
}

interface signInDataI {
    title: string,
    subtitle: string,
    btnText: string,
    errorText: string,
    signUpText: string,
    forgotPasswordText: string,
    fields: signInDataFieldsI[]
}

export const signInDefaultState: signInI = {
    email: '',
    password: ''
}

export const signInData: signInDataI =
{
    title: 'Login',
    subtitle: 'Utiliza nuestra plataforma para agilizar tu negocio y obtener estadisticas inteligentes',
    btnText: 'Ingresar',
    signUpText: 'Aun no tienes cuenta?',
    forgotPasswordText: 'Olvidaste tu contraseña?',
    errorText: 'Credenciales invalidas, intenta de nuevo.',
    fields: [
        {
            label: 'Cual es tu usuario?',
            placeholder: 'ejemplo@email.com',
            id: 'email',
            type: 'text'
        }, {
            label: 'Cual es tu contraseña?',
            placeholder: 'ejemplo123',
            id: 'password',
            type: 'password'
        },
    ]
}

// Sign up page

export interface signUpI {
    email: string,
    password: string,
    confirmPassword: string
}

interface signUpDataFieldsI {
    label: string,
    placeholder: string,
    id: 'email' | 'password' | 'confirmPassword',
    type: string
}

interface signUpDataI {
    title: string,
    subtitle: string,
    btnText: string,
    errorText: string,
    signInText: string,
    fields: signUpDataFieldsI[]
}

export const signUpDefaultState: signUpI = {
    email: '',
    password: '',
    confirmPassword: '',
}

export const signUpData: signUpDataI =
{
    title: 'Registrate',
    subtitle: 'Crea tu usuario y accede a funciones nuevas para tu negocio!',
    btnText: 'Registrar',
    signInText: 'Ya tienes cuenta?',
    errorText: 'Credenciales invalidas, intenta de nuevo.',
    fields: [
        {
            label: 'Cual es tu usuario?',
            placeholder: 'ejemplo@email.com',
            id: 'email',
            type: 'email'
        }, {
            label: 'Cual es tu contraseña?',
            placeholder: 'ejemplo123',
            id: 'password',
            type: 'password'
        }, {
            label: 'Verifica tu contraseña',
            placeholder: 'ejemplo123',
            id: 'confirmPassword',
            type: 'password'
        },
    ]
}

// Forgot Password page

export interface forgotPasswordI {
    email: string,
    password: string,
    confirmPassword: string,
    code: string
}

interface forgotPasswordDataFieldsI {
    label: string,
    placeholder: string,
    id: 'email' | 'password' | 'confirmPassword'| 'code',
    type: string
}

interface forgotPasswordDataI {
    title: string,
    subtitle: string,
    btnText: string,
    btn2Text: string,
    errorText: string,
    signInText: string,
    fields: forgotPasswordDataFieldsI[]
    fields2: forgotPasswordDataFieldsI[]
}

export const forgotPasswordDefaultState: forgotPasswordI = {
    email: '',
    password: '',
    confirmPassword: '',
    code: '',
}

export const forgotPasswordData: forgotPasswordDataI =
{
    title: 'Restaura tu contraseña',
    subtitle: 'Ingresa tu email y te enviaremos un codigo para que crees tu nueva contraseña.',
    btnText: 'Enviar codigo',
    btn2Text: 'Restaurar contraseña',
    signInText: 'Ya tienes cuenta?',
    errorText: 'Credenciales invalidas, intenta de nuevo.',
    fields: [
        {
            label: 'Cual es tu usuario?',
            placeholder: 'ejemplo@email.com',
            id: 'email',
            type: 'email'
        }, 
    ],
    fields2: [
        {
            label: 'Cual es tu codigo?',
            placeholder: 'abc123',
            id: 'code',
            type: 'text'
        }, {
            label: 'Cual es tu nueva contraseña?',
            placeholder: 'ejemplo123',
            id: 'password',
            type: 'password'
        }, {
            label: 'Verifica tu contraseña',
            placeholder: 'ejemplo123',
            id: 'confirmPassword',
            type: 'password'
        },
    ]
}

// Verify page

export interface verifyI {
    code: string,
}

interface verifyDataFieldsI {
    label: string,
    placeholder: string,
    id: 'code',
    type: string
}

interface verifyDataI {
    title: string,
    subtitle: string,
    btnText: string,
    btn2Text: string,
    errorText: string,
    resendText: string,
    signInText: string,
    fields: verifyDataFieldsI[]
}

export const verifyDefaultState: verifyI = {
    code: '',
}

export const verifyData: verifyDataI =
{
    title: 'Verificate',
    subtitle: 'Hemos enviado un codigo de verificacion a tu email, por favor ponlo aqui.',
    btnText: 'Verificar',
    btn2Text: 'Reenviar Codigo',
    signInText: 'Ya tienes cuenta?',
    errorText: 'Error al verificar su usuario.',
    resendText: 'Codigo reenviado correctamente.',
    fields: [
        {
            label: 'Cual es tu codigo?',
            placeholder: 'abc123',
            id: 'code',
            type: 'text'
        }
    ]
}
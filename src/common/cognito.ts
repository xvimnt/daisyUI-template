import { Auth } from "aws-amplify";

export const loginWithEmailAndPassword = async (email: string, password: string) => {
    if(email && password) {
        const user = await Auth.signIn(email, password);
    }
};
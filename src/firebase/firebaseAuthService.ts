import {signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import type {LoginData, SignUpData} from "../utils/shop-types.ts";
import {auth} from "../configurations/firebase-config.ts";

const loginWithEmail = async (data: LoginData) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);

    return data.email;
};

const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(auth.currentUser);
    return Promise.resolve(user.email)
};

export const login = async (data: LoginData) => {
    return data.email === "GOOGLE"? loginWithGoogle() : loginWithEmail(data);
};

export const registerWithEmailAndPassword = async (data:LoginData) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);

    return data.email;
}

export const exit = async () => {
    await signOut(auth);
}

export const showUserInfo = async (data:SignUpData)=>{
    const user = auth.currentUser;
    if(user)
        await updateProfile(user, {displayName: data.firstName, photoURL: null})
    else throw new Error("User is not logged in");
}


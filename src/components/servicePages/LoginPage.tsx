import SignInForm from "../templates/SighInForm.tsx";
import {LoginData} from "../../utils/shop-types.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import {useAppDispatch} from "../../redux/hooks.ts";

const LoginPage = () => {
    
   const dispatch = useAppDispatch();

    const handleFormSubmit = (loginData: LoginData) => {
        // console.log(JSON.stringify(loginData));
        dispatch(loginAction(loginData.email));
    }

    return <SignInForm handleFormSubmit={handleFormSubmit}/>

};

export default LoginPage;
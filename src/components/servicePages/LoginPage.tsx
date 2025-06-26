import SignInForm from "../templates/SignInForm.tsx";
import {LoginData, Paths} from "../../utils/shop-types.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
import {login} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

    // const handleFormSubmit = (loginData: LoginData) => {
    //     // console.log(JSON.stringify(loginData));
    //     dispatch(loginAction(loginData.email));
    // }

    const loginWithFirebase = async (loginData:LoginData) => {
         try {
             const email = await login(loginData);
             dispatch(loginAction(email));
             navigate(Paths.HOME);
         }catch (e) {
             console.log(e) // Todo
         }
    }

    return <SignInForm handleFormSubmit={loginWithFirebase}/>

};

export default LoginPage;
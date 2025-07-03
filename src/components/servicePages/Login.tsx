import SignInForm from "../templates/SignInForm.tsx";
import {LoginData} from "../../utils/shop-types.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import {useAppDispatch} from "../../redux/hooks.ts";
import {login} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    // const submitFn = (loginData: LoginData)=> {
    //      console.log(JSON.stringify(loginData))
    //     dispatch(loginAction(loginData.email))
    // }
    const loginWithFirebase = async (loginData:LoginData) => {
        try{
            const user = await login(loginData);
            dispatch(loginAction(user));
            navigate('/');
        }catch (e) {
            console.log(e) //Todo
        }
    }

    return (
        <div>
            <SignInForm submitFn={loginWithFirebase}/>
        </div>
    );

};

export default Login;
import SignUpForm from "../templates/SignUpForm.tsx";
import {LoginData, SignUpData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword, showUserInfo} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";

const Registration = () => {

    // const handleSignUpForm =(data:SignUpData)=>{
    //     console.log(JSON.stringify(data));
    // };

    const navigate = useNavigate();

    const signUpWithEmail = async (data: SignUpData) => {
        const userEmailPass:LoginData = {
            email: data.email,
            password:data.password
        }
        try{
            await registerWithEmailAndPassword(userEmailPass);
            await showUserInfo(data);
            navigate("/login");
        }catch (e) {
            console.log(e)
        }
    };


    return (
        <div>
            <SignUpForm handleSignUpForm={signUpWithEmail}/>
        </div>
    );
};

export default Registration;
import SignUpForm from "../templates/SignUpForm.tsx";
import {LoginData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";
import {SignupData} from "../../utils/shop-types.ts";
import {updateUserProfile} from "../../firebase/firebaseAuthService.ts";

const Registration = () => {
    const navigate = useNavigate();
    // const signUpSubmit = (data:SignupData) => {
    //     console.log(JSON.stringify(data))
    // }
    const signUpWithEmail = async (data: SignupData) => {
        const userEmailPass:LoginData = {
            email: data.email,
            password:data.password
        }
        try{
            await registerWithEmailAndPassword(userEmailPass);
            await updateUserProfile(data)
            navigate('/login')
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <SignUpForm submitFunc={signUpWithEmail}/>
        </div>
    );
};

export default Registration;
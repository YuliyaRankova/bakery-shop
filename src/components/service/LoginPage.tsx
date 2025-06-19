import LoginForm from "./LoginForm.tsx";

const LoginPage = () => {
    
    const handleFormSubmit = (formData: object) => {
        console.log(JSON.stringify(formData));
    }

    return <LoginForm onSubmit={handleFormSubmit}/>

};

export default LoginPage;
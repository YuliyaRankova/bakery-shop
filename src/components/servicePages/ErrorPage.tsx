import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Paths} from "../../utils/shop-types.ts";


const ErrorPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${Paths.ERROR}`)
    }, []);

    return (
        <h2>
            ERROR! Something went wrong!
        </h2>
    );
};

export default ErrorPage;
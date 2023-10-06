import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const SigninRoute = (props) => {
    if (Cookies.get('token') === undefined) {
        return props.children
    } else if (Cookies.get('token') !== undefined){
        return <Navigate to={'/'}/>
    }
}
export default SigninRoute;
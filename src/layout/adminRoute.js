import Cookies from "js-cookie";
import AccessDenied from "../pages/accessDenied";

const AdminRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
        return props.children
    } else if (Cookies.get('token') === undefined){
        return (
            <AccessDenied />
        )
    }
}
export default AdminRoute;
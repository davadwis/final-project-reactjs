import React from "react";
import NavBar from "../components/navBar";

const Layout = (props) => {

    return (
        <>
            <NavBar />
            {props.children}
        </>
    )
}

export default Layout;




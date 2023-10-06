import React from "react";
import Jumbotron from "../components/jumbotron";
import Companies from "../components/companies";
import OpeningWords from "../components/openingWords";

const Home = () => {

    return (
        <>
        <div>
            <Jumbotron />
            <OpeningWords />
            <Companies />
        </div>
        </>
    )
}
export default Home;
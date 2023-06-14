import React from "react";
import ColorSelector from "./colorselector.jsx";
import Navbar from "./navbar.jsx";


//create your first component
const Home = () => {
	return (
		<div>
                <Navbar />
                <ColorSelector />
        </div>
    );
};

export default Home;
import React, { useState } from "react";

const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red");

	return (
		<div className="traffic-light">
			<div className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
			<br/>
			<div className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<br/>
			<div className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
		</div>
	);
};

export default Home;

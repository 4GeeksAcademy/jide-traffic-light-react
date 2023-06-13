import React, { useState } from "react";

const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red");

	return (
		<div className="traffic-light">
			<div 
				onClick={() => setSelectedColor("red")}
				className={"light red" + (selectedColor === "red" ? " glow" : "")}>
			</div>
			<br/>
			<div 
				onClick={() => setSelectedColor("yellow")}
				className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}>
			</div>
			<br/>
			<div 
				onClick={() => setSelectedColor("green")}
				className={"light green" + (selectedColor === "green" ? " glow" : "")}>
			</div>
		</div>
	);
};

export default Home;

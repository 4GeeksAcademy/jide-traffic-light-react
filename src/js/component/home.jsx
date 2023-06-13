import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red");
	return (
		<div className="traffic-light">
			<div className="light red glow"></div>
			<br/>
			<div className="light yellow"></div>
			<br/>
			<div className="light green"></div>
		</div>
	);
};

export default Home;

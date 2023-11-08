import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
	const [glowing, setGlowing] = useState('red');
	return (
		<div className="traffic">
			<div className={"lamp red " + (glowing === 'red' ? "glowing" : "")} onClick={() => setGlowing("red")}></div>
			<div className={"lamp yellow " + (glowing === 'yellow' ? "glowing" : "")} onClick={() => setGlowing("yellow")}></div>
			<div className={"lamp green " + (glowing === 'green' ? "glowing" : "")} onClick={() => setGlowing("green")}></div>
		</div>
	);
};

export default Home;

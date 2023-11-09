import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
	const [glowing, setGlowing] = useState('red');
	return (
		<div>
			<div className="d-flex justify-content-center">
				<button type="button" className="btn btn-primary" onClick={() => {
					if (glowing === "red") { setGlowing("green") }
					if (glowing === "green") { setGlowing("yellow") }
					if (glowing === "yellow") { setGlowing("red") }
				}}>
					Switch Between Colors
				</button>
			</div>
			<div className="traffic">
				<div className={"lamp red " + (glowing === 'red' ? "glowingRed" : "")} onClick={() => setGlowing("red")}></div>
				<div className={"lamp yellow " + (glowing === 'yellow' ? "glowingYellow" : "")} onClick={() => setGlowing("yellow")}></div>
				<div className={"lamp green " + (glowing === 'green' ? "glowingGreen" : "")} onClick={() => setGlowing("green")}></div>
				<div className="post"></div>
			</div>
		</div>
	);
};


export default Home;

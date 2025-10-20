import { About } from "@/widgets/about";
import { Header } from "@/widgets/header";
import { Parallax, ParallaxLayer, type IParallax } from "@react-spring/parallax";
import { useRef } from "react";

function App() {
	const parallax = useRef<IParallax>(null!);
	return (
		<>
			<Parallax
				ref={parallax}
				pages={3}
				style={{
					minHeight: "100vh",
				}}
			>
				<ParallaxLayer
					offset={0}
					speed={0.5}
					style={{
						display: "flex",
						flexDirection: "column",
						padding: "20px",
						zIndex: 3, // самый верхний
					}}
				>
					<Header />
				</ParallaxLayer>
				<ParallaxLayer
					offset={1}
					speed={0.8}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "20px",
						zIndex: 2,
					}}
				>
					<div style={{ width: "100%", height: "100%" }}>
						<About />
					</div>
				</ParallaxLayer>
				<ParallaxLayer
					offset={2}
					speed={0.5}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "20px",
						zIndex: 1, // самый нижний
					}}
				>
					<h1>HUY</h1>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default App;

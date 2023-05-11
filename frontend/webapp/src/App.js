import styles from "./App.css";
import { Header } from "./components/header/header";
import { CCarouselCaption } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarousel } from "@coreui/react";
import { CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
function App() {
	const [pictures, setPictures] = React.useState([]);

	async function fetchPictures() {
		const response = await fetch("http://127.0.0.1:4000/api/carousel/");
		const data = await response.json();
		setPictures(data);
	}

	React.useEffect(() => {
		fetchPictures();
	}, []);

	return (
		<div className="App">
			<Header />
			<CCarousel controls indicators dark>
				{pictures.map((picture) => (
					<CCarouselItem key={picture.id}>
						<CImage
							className="carousel__image"
							src={picture.image}
							alt={picture.id}
						/>
						<CCarouselCaption className="d-none d-md-block caption">
							<h5>{picture.title}</h5>
							<p>{picture.description}</p>
						</CCarouselCaption>
					</CCarouselItem>
				))}
			</CCarousel>
			;
		</div>
	);
}

export default App;

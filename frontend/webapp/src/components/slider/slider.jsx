import { CCarouselCaption } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import { CCarousel } from "@coreui/react";
import { CImage } from "@coreui/react";
import React from "react";

<CCarousel controls indicators dark>
	<CCarouselItem>
		<CImage
			className="d-block w-100"
			src="https://picsum.photos/id/1/1280/500"
			alt="slide 1"
		/>

		<CCarouselCaption className="d-none d-md-block">
			<h5>First slide label</h5>

			<p>Some representative placeholder content for the first slide.</p>
		</CCarouselCaption>
	</CCarouselItem>

	<CCarouselItem>
		<CImage className="d-block w-100" src="" alt="slide 2" />

		<CCarouselCaption className="d-none d-md-block">
			<h5>Second slide label</h5>

			<p>Some representative placeholder content for the first slide.</p>
		</CCarouselCaption>
	</CCarouselItem>

	<CCarouselItem>
		<CImage className="d-block w-100" src="" alt="slide 3" />

		<CCarouselCaption className="d-none d-md-block">
			<h5>Third slide label</h5>

			<p>Some representative placeholder content for the first slide.</p>
		</CCarouselCaption>
	</CCarouselItem>
</CCarousel>;

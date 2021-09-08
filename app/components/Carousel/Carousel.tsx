import { MyText, SafeView } from "@elements/SharedElements";
import React from "react";

const Carousel = () => {
	return (
		<SafeView>
			<div className="flex px-5 flex-row overflow-scroll carouselrow transition-all duration-500 ease-in-out">
				{Array.from(Array(12).keys()).map((i) => (
					<div key={i}>
						<div
							className="transform rotate-3 hover:rotate-0  transition-all duration-500 ease-in-out bg-red-700 mx-5 my-8  cursor-pointer hover:scale-110 "
							style={{
								width: 200,
								height: 200,
								borderRadius: 10,
							}}
						></div>
					</div>
				))}
			</div>
			<button
				className="w-24 h-10 bg-purple-700 rounded-lg m-8"
				onClick={() => {
					document.querySelector(".carouselrow")!.scrollLeft -=
						window.innerWidth / 2 - 10;
				}}
			>
				<MyText className="text-white">&lArr;</MyText>
			</button>
			<button
				className="w-24 h-10 bg-purple-700 m-8  rounded-lg float-right"
				onClick={() => {
					document.querySelector(".carouselrow")!.scrollLeft +=
						window.innerWidth / 2 + 10;
				}}
			>
				<MyText className="text-white">&rArr;</MyText>
			</button>
		</SafeView>
	);
};

export default Carousel;

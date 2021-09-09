import { MyText, SafeView } from "@elements/SharedElements";
import React, { useEffect, useState } from "react";

const isEven = (index: number) => index % 2 === 0;

const Intro = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("/api/intro");
			const json = await result.json();
			setData(json);
		};
		fetchData();
	}, [data]);

	return (
		<>
			{data.map((item: IntroDataProps, index) => (
				<SafeView key={index} className="py-4 pt-4 lg:px-40">
					<div
						className={
							isEven(index)
								? "flex flex-col md:flex-row"
								: "flex flex-col md:flex-row-reverse"
						}
					>
						<div className="px-4 lg:px-10 flex-1">
							<MyText title className="py-7">
								{item.title}
							</MyText>
							<MyText
								justify
								className="tracking-wider px-2"
								style={{
									fontFamily: "sans-serif",
								}}
							>
								{item.description}
							</MyText>
						</div>
						<img
							src={item.image}
							alt={item.title}
							style={{
								maxHeight: "300px",
								width: "auto",
								alignSelf: "center",
							}}
						/>
					</div>
				</SafeView>
			))}
		</>
	);
};

export default Intro;

import { MyText, SafeView } from "@elements/SharedElements";
import React from "react";
import WorkChart from "./WorkChart";

const OurWork = () => {
	return (
		<div>
			<SafeView className="px-1 py-4 lg:px-60">
				<MyText title className="py-7">
					Our Work
				</MyText>
				<MyText
					justify
					className="px-2 tracking-wider"
					style={{ fontFamily: "sans-serif" }}
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Officiis suscipit tenetur ipsa placeat fuga doloribus
					perferendis nam. Quam consequuntur rem similique voluptates
					aspernatur! Pariatur dolores expedita ipsam iste officiis
					voluptas modi praesentium reiciendis quis ipsum, magnam sunt
					aspernatur corporis velit odit eaque tenetur recusandae.
					Obcaecati sequi esse doloribus repudiandae nostrum nisi
					magni omnis eaque voluptates, dolor est maiores animi porro,
					nulla tempore ipsum aliquid dolores placeat nobis voluptatum
					fuga unde, soluta incidunt asperiores. Iusto nam ab sint
					dolor, sit enim quisquam nesciunt perspiciatis, cum,
					consectetur minima! Veritatis dolorum quas ab doloremque
					atque laudantium expedita inventore eum. Natus debitis, quas
					commodi odit maiores fugiat doloribus. Incidunt ratione
					similique cum debitis! Sint cupiditate similique odit ex,
					iusto nihil ad vero doloremque eos deserunt, reiciendis non
					aperiam praesentium eaque eum, impedit ea? Corporis expedita
					quo nulla magni quaerat inventore corrupti quis vero quae.
					Iste minima in itaque magni eius autem,
				</MyText>
			</SafeView>
			<WorkChart />
		</div>
	);
};

export default OurWork;

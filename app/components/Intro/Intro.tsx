import { MyText, SafeView } from "@elements/SharedElements";
import React from "react";
import Task from "./Task";

const Intro = () => {
	return (
		<>
			<SafeView className="px-8 py-4 pt-20 lg:px-40">
				<div className="flex flex-col md:flex-row">
					<div className="px-10">
						<MyText title className="py-7">
							About Company
						</MyText>
						<MyText
							justify
							className="tracking-wider "
							style={{
								fontFamily: "sans-serif",
								fontWeight: "200",
							}}
						>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Officiis suscipit tenetur ipsa placeat fuga
							doloribus perferendis nam. Quam consequuntur rem
							similique voluptates aspernatur! Pariatur dolores
							expedita ipsam iste officiis voluptas modi
							praesentium reiciendis quis ipsum, magnam sunt
							aspernatur corporis velit odit eaque tenetur
							recusandae. Obcaecati sequi esse doloribus
							repudiandae nostrum nisi magni omnis eaque
							voluptates, dolor est maiores animi porro, nulla
							tempore ipsum aliquid dolores placeat nobis
							voluptatum fuga unde, soluta incidunt asperiores.
							Iusto nam ab sint dolor, sit enim quisquam nesciunt
							perspiciatis, cum, consectetur minima! Veritatis
							dolorum quas ab doloremque atque laudantium expedita
							inventore eum. Natus debitis, quas commodi odit
							maiores fugiat doloribus. Incidunt ratione similique
							cum debitis! Sint cupiditate similique odit ex,
							iusto nihil ad vero doloremque eos deserunt,
							reiciendis non aperiam praesentium eaque eum,
							impedit ea? Corporis expedita quo nulla magni
							quaerat inventore corrupti quis vero quae. Iste
							minima in itaque magni eius autem,
						</MyText>
					</div>
					<img
						src="/images/mac.png"
						alt="Intro"
						width="400"
						height="100"
					/>
				</div>
			</SafeView>

			<SafeView className="px-8 py-4 lg:px-40">
				<div className="flex flex-col-reverse md:flex-row">
					<img
						src="/images/mac.png"
						alt="Intro"
						width="400"
						height="100"
					/>
					<div className="px-10">
						<MyText title className="py-7">
							About Company
						</MyText>
						<MyText
							justify
							className="tracking-wider"
							style={{
								fontFamily: "sans-serif",
								fontWeight: "200",
							}}
						>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Officiis suscipit tenetur ipsa placeat fuga
							doloribus perferendis nam. Quam consequuntur rem
							similique voluptates aspernatur! Pariatur dolores
							expedita ipsam iste officiis voluptas modi
							praesentium reiciendis quis ipsum, magnam sunt
							aspernatur corporis velit odit eaque tenetur
							recusandae. Obcaecati sequi esse doloribus
							repudiandae nostrum nisi magni omnis eaque
							voluptates, dolor est maiores animi porro, nulla
							tempore ipsum aliquid dolores placeat nobis
							voluptatum fuga unde, soluta incidunt asperiores.
							Iusto nam ab sint dolor, sit enim quisquam nesciunt
							perspiciatis, cum, consectetur minima! Veritatis
							dolorum quas ab doloremque atque laudantium expedita
							inventore eum. Natus debitis, quas commodi odit
							maiores fugiat doloribus. Incidunt ratione similique
							cum debitis! Sint cupiditate similique odit ex,
							iusto nihil ad vero doloremque eos deserunt,
							reiciendis non aperiam praesentium eaque eum,
							impedit ea? Corporis expedita quo nulla magni
							quaerat inventore corrupti quis vero quae. Iste
							minima in itaque magni eius autem,
						</MyText>
					</div>
				</div>
			</SafeView>
		</>
	);
};

export default Intro;

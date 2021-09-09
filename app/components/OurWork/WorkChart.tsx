import { MyText, SafeView } from "@elements/SharedElements";
import React, { useEffect, useState } from "react";

const WorkChart = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("/api/workchart");
			const json = await result.json();
			setData(json);
		};
		fetchData();
	}, [data]);

	return (
		<SafeView>
			<MyText title className="px-8 py-10 lg:px-60">
				WorkChart
			</MyText>

			<div className="flex items-center flex-row  py-10 flex-wrap">
				{data.map((item: WorkChartProps, index) => (
					<div
						key={index}
						className={
							index === 0 || index === data.length - 1
								? `py-10 flex flex-col flex-wrap items-center w-full`
								: `py-10 flex flex-col flex-wrap items-center w-full md:w-1/2`
						}
					>
						<div style={{ width: 150 }}>
							<MyText
								style={{
									fontSize: 24,
									fontWeight: "bold",
								}}
							>
								{item.title} {index + 1}
							</MyText>
							<MyText
								className=" tracking-wider mb-4"
								style={{ fontFamily: "sans-serif" }}
							>
								{item.description}
							</MyText>
						</div>
					</div>
				))}
			</div>
		</SafeView>
	);
};

export default WorkChart;

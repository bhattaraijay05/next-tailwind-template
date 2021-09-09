import { MyText, SafeView } from "@elements/SharedElements";
import React, { useEffect, useState } from "react";

const AboutEmployee = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("/api/employee");
			const json = await result.json();
			setData(json);
		};
		fetchData();
	}, [data]);

	return (
		<SafeView className="px-8 py-8 lg:px-60">
			<MyText title className="py-12">
				About Employee
			</MyText>
			<div className="flex flex-wrap">
				{data.map((employee: EmployeeDataProps, index) => (
					<div className="w-full lg:w-1/2 p-4" key={index}>
						<div className="flex flex-col items-center">
							<div className="w-24 h-24 rounded-full mb-4">
								<img
									src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
									alt="employee"
									className="w-full h-full rounded-full"
								/>
							</div>
							<MyText title className="mb-4">
								{employee.name}
							</MyText>
							<MyText className="mb-4">
								{employee.position}
							</MyText>
							<MyText
								justify
								className="px-2 tracking-wider mb-4"
								style={{ fontFamily: "sans-serif" }}
							>
								{employee.description}
							</MyText>
						</div>
					</div>
				))}
			</div>
		</SafeView>
	);
};

export default AboutEmployee;

import React from "react";

const Page = () => {
	return (
		<div
			style={{
				padding: "2rem 8rem",
			}}
		>
			{Array.from(Array(50).keys()).map((i) => (
				<div key={i}>
					<span className="text-red-600 bg-white my-5 p-1 hover:bg-red-500 hover:text-white transition-all cursor-pointer border-dashed">
						Page {i}
					</span>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec euismod, nisl eget consectetur sagittis, nisl nunc
						aliquet nunc, eu aliquam nunc nisl eu nisl.
					</p>
				</div>
			))}
		</div>
	);
};

export default Page;

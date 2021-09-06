import { MyText, SafeView } from "@elements/SharedElements";
import React from "react";
import { toggleTheme } from "../../pages/_app";

const Page = () => {
	return (
		<SafeView
			style={{
				padding: "2rem 4rem",
			}}
		>
			<button
				onClick={toggleTheme}
				className="px-2 py-1 bg-purple-700 text-white text-center rounded mt-4"
			>
				toggle dark mode
			</button>
			{Array.from(Array(50).keys()).map((i) => (
				<div key={i}>
					<span className="text-red-600 bg-white my-5 p-1 hover:bg-red-500 hover:text-white transition-all cursor-pointer border-dashed">
						Page {i}
					</span>

					<MyText className="text-blue-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec euismod, nisl eget consectetur sagittis, nisl nunc
						aliquet nunc, eu aliquam nunc nisl eu nisl.
					</MyText>
				</div>
			))}
		</SafeView>
	);
};

export default Page;

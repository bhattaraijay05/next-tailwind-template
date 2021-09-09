import React from "react";
import { toggleTheme } from "../../../pages/_app";

const HeaderImage = () => {
	return (
		<div className="parallax flex justify-center items-end">
			<div className="sticky -z-1">
				<button
					onClick={toggleTheme}
					className="px-10 py-2 bg-purple-700 text-white  rounded hover:bg-purple-200 hover:text-purple-700 transition-all mb-10"
				>
					Hi
				</button>
			</div>
		</div>
	);
};

export default HeaderImage;

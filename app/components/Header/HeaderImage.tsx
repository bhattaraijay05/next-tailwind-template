import React from "react";
import { toggleTheme } from "../../../pages/_app";

const HeaderImage = () => {
	return (
		<div className="parallax flex justify-center">
			<div className="sticky -z-1">
				<button
					onClick={toggleTheme}
					className="px-10 py-2 bg-purple-700 text-white text-center rounded mt-4 hover:bg-purple-200     hover:text-purple-700 transition-all bottom-10 absolute"
				>
					Hi
				</button>
			</div>
		</div>
	);
};

export default HeaderImage;

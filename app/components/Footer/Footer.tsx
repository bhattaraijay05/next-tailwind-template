import { MyText, SafeView } from "@elements/SharedElements";
import React from "react";

const Footer = () => {
	return (
		<SafeView>
			<footer className="flex flex-col justify-center py-8 px-0 items-center">
				<a href="#" target="_blank" rel="noopener noreferrer">
					<MyText>Powered by Our Company</MyText>
				</a>
			</footer>
		</SafeView>
	);
};

export default Footer;

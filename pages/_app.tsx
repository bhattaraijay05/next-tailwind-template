import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
	return (
		<>
			<div>
				{isVisible && (
					<div onClick={scrollToTop}>
						<p id="myBtn">&uarr;</p>
					</div>
				)}
			</div>
			<Header />
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;

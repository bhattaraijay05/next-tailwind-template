import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import Header from "../app/components/Header/Header";

export const toggleTheme = () => {
	if (localStorage.theme === undefined) {
		localStorage.theme = "dark";
	}
	localStorage.theme === "light"
		? (localStorage.theme = "dark")
		: (localStorage.theme = "light");
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
};

function MyApp({ Component, pageProps }: AppProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

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

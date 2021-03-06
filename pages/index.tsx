import About from "@components/About/About";
import Carousel from "@components/Carousel/Carousel";
import Footer from "@components/Footer/Footer";
import HeaderImage from "@components/Header/HeaderImage";
import Intro from "@components/Intro/Intro";
import OurWork from "@components/OurWork/OurWork";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Project</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeaderImage />
			<Intro />
			<Carousel />
			<OurWork />
			<About />
			<Footer />
		</>
	);
};

export default Home;

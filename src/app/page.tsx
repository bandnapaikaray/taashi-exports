import SiteBanner from "@/components/banner/SiteBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import React from "react";

export default function Home() {
	return (
		<div>
			<SiteBanner />
			<Header />
			<Hero />
			<Footer />
		</div>
	);
}

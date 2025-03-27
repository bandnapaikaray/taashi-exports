"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";

export default function Hero() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className="relative w-screen h-[calc(100vh-4rem)] flex flex-col -mt-8"
			style={{
				width: isMobile ? "100%" : "100%",
			}}
		>
			<section
				id="hero"
				className="flex-grow bg-cover bg-center flex max-w-full"
				style={{
					backgroundImage: "url('/shop/hero-bg.jpg')",
				}}
			>
				<div
					className="flex flex-col items-start justify-center space-y-6 w-full -mt-12"
					style={{
						alignItems: isMobile ? "center" : "flex-start",
						marginBottom: isMobile ? "1rem" : "0",
					}}
				>
					<div className="bg-white w-auto py-1 px-2 rounded-full flex items-center justify-center space-x-2 m-24 -mb-6">
						<div className="flex items-center space-x-2">
							<BsGoogle className="h-5 w-5 text-teal-600" />
						</div>

						<div className="flex items-center space-x-0 text-yellow-500">
							<Star className="h-4 w-4" />
							<Star className="h-4 w-4" />
							<Star className="h-4 w-4" />
							<Star className="h-4 w-4" />
							<Star className="h-4 w-4" />
						</div>

						<span className="text-gray-700 text-xs">5572 reviews</span>
					</div>

					<div className="w-auto py-4 px-6 rounded-lg flex flex-col items-center space-y-4 mx-4 max-w-xl">
						<p className="text-4xl italic text-gray-800">Where Love Grows</p>
						<p className="text-sm text-gray-600">
							Engagement rings for a lifetime of memories.
						</p>

						<button
							type="button"
							className="px-6 py-3 bg-teal-600 text-white text-sm font-medium rounded hover:bg-teal-700"
							style={{ marginTop: isMobile ? "16rem" : "1rem" }}
						>
							BROWSE ENGAGEMENT RINGS
						</button>
					</div>
				</div>
			</section>

			<div className="h-20 w-full bg-gray-100 flex flex-col md:flex-row items-center justify-center space-x-14 md:space-x-4">
				<p
					className="text-gray-700 text-lg font-medium italic hover:underline cursor-pointer mr-10"
					style={{ marginLeft: isMobile ? "3rem" : "" }}
				>
					AS SEEN IN
				</p>
				<img
					src="/shop/nyp-logo.png"
					alt="New York Post Logo"
					className="w-auto h-10 object-contain"
					style={{ marginLeft: isMobile ? "0.5rem" : "" }}
				/>
			</div>
		</div>
	);
}

"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu } from "lucide-react";
// import EngagementModal from './nav-links/EngagementModal';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
// import MobileNav from './MobileNav';
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "#", label: "HOME" },
	{ href: "#", label: "ABOUT US" },
	{ href: "#", label: "OUR PRODUCTS" },
	{ href: "#", label: "CONTACT" },
];

const Header: React.FC = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const toggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen);
	};

	const closeMobileNav = () => {
		setIsMobileNavOpen(false);
	};

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

	const pathname = usePathname();
	if (pathname.includes("/shopify")) {
		return null;
	}

	return (
		<div
			className="sticky top-0 w-screen z-30 bg-white shadow-sm"
			style={{
				width: isMobile ? "100%" : "100%",
			}}
		>
			<header className="p-1 relative">
				<div className="container flex items-center justify-center mx-auto h-16">
					<div className="md:hidden flex items-center">
						<button
							type="button"
							onClick={toggleMobileNav}
							className="p-2 text-gray-600 hover:text-teal-600"
						>
							<Menu className="h-6 w-6" />
						</button>
					</div>

					<div className="absolute left-4">
						<Link href="/">
							<img
								src="/shop/cullen-logo.jpg"
								alt="Tashi Exports"
								width={170}
								height={40}
							/>
						</Link>
					</div>

					{/* <div className="md:hidden flex items-center">
						<button
							type="button"
							className="p-2 text-gray-600 hover:text-teal-600"
						>
							<ShoppingCart className="h-5 w-5" />
						</button>
					</div> */}

					<nav className="hidden md:flex items-center space-x-10 text-md text-gray-600 ">
						{navLinks.map((link) => (
							<div key={link.label} className="relative">
								<HoverCard>
									<HoverCardTrigger asChild>
										<Link href={link.href} className="hover:text-teal-600">
											{link.label}
										</Link>
									</HoverCardTrigger>
									<HoverCardContent className="w-screen mt-6">
										{/* <EngagementModal /> */}
									</HoverCardContent>
								</HoverCard>
							</div>
						))}
					</nav>

					{/* <div className="hidden md:flex items-center space-x-4">
						<button
							type="button"
							className="p-2 text-gray-600 hover:text-teal-600"
						>
							<Search className="h-5 w-5" />
						</button>
						<button
							type="button"
							className="p-2 text-gray-600 hover:text-teal-600"
						>
							<ShoppingCart className="h-5 w-5" />
						</button>

						<Link
							href="/book-appointment"
							className="px-4 py-3 text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 rounded"
						>
							BOOK APPOINTMENT
						</Link>
					</div> */}
				</div>

				{/* {isMobileNavOpen && <MobileNav closeNav={closeMobileNav} />} */}
			</header>
		</div>
	);
};

export default Header;

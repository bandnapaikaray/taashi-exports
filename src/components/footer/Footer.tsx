"use client";

import React, { useEffect, useState } from "react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { CalendarCheck, Mail, PhoneIcon } from "lucide-react";
import {
	BsFacebook,
	BsLinkedin,
	BsPinterest,
	BsSpotify,
	BsTiktok,
	BsTwitter,
	BsYoutube,
} from "react-icons/bs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";

export default function Footer() {
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

	const pathname = usePathname();
	if (pathname.includes("/shopify")) {
		return null;
	}

	const quickLinks = [
		"Ready-to-Ship",
		"Engagement Rings",
		"Lab Diamonds",
		"Moissanite",
		"Sapphires",
		"Women's Wedding Rings",
		"Men's Wedding Rings",
		"Education",
	];

	const aboutUs = [
		"Our Story",
		"Reviews",
		"Moissanite Blog",
		"Lab Grown Diamond Blog",
		"Cullen Initiatives",
		"Careers",
		"Impact Report",
		"Press Room",
	];

	const clientCare = [
		"FAQs",
		"Shipping",
		"Free Resizing",
		"Order Status",
		"Ring Size Guide",
		"Ring Care Guide",
		"Lifetime Warranty",
		"Book Appointment",
	];

	const contactDetails = [
		{ icon: <PhoneIcon className="h-4 w-4" />, text: "+61 1300 977 619" },
		{ icon: <Mail className="h-4 w-4" />, text: "sales@cullenjewellery.com" },
		{ icon: <CalendarCheck className="h-4 w-4" />, text: "Appointment Only" },
	];

	const socialIcons = [
		{ icon: <InstagramLogoIcon className="h-4 w-4" />, key: "instagram" },
		{ icon: <BsFacebook className="h-4 w-4" />, key: "facebook" },
		{ icon: <BsYoutube className="h-4 w-4" />, key: "youtube" },
		{ icon: <BsPinterest className="h-4 w-4" />, key: "pinterest" },
		{ icon: <BsTiktok className="h-4 w-4" />, key: "tiktok" },
		{ icon: <BsTwitter className="h-4 w-4" />, key: "twitter" },
		{ icon: <BsLinkedin className="h-4 w-4" />, key: "linkedin" },
		{ icon: <BsSpotify className="h-4 w-4" />, key: "spotify" },
	];

	const contactUs = [
		{ icon: <PhoneIcon className="h-4 w-4" />, text: "+61 1300 977 619" },
		{ icon: <Mail className="h-4 w-4" />, text: "sales@cullenjewellery.com" },
		{ icon: <CalendarCheck className="h-4 w-4" />, text: "Appointment Only" },
		"Mon-Wed: 3:30 AM - 11:30 AM",
		"Thu-Fri: 3:30 AM - 1:30 PM",
		"Sat: 2:30 AM - 10:30 AM",
	];

	return (
		<footer
			className="bg-teal-600 text-white py-10"
			style={{
				width: isMobile ? "100%" : "100%",
			}}
		>
			<div className="container mx-auto flex flex-col items-center lg:items-start">
				{isMobile ? (
					<div className="grid grid-cols-1 gap-8 text-center mb-10">
						<div className="flex justify-center gap-4">
							<div className="text-xs -ml-10">
								WORLDWIDE <br /> EXPRESS SHIPPING
							</div>
							<div className="text-xs ml-10">
								FREE <br /> RESIZING
							</div>
						</div>
						<div className="flex justify-center gap-8">
							<div className="text-xs ml-0">
								LIFETIME <br /> WARRANTY
							</div>
							<div className="text-xs ml-8">
								FREE RING <br /> CUSTOMISATION
							</div>
						</div>
					</div>
				) : (
					<div className="grid grid-cols-2 md:grid-cols-4 gap-48 text-center mb-10 ml-20">
						<div>
							<p className="text-sm">
								WORLDWIDE <br /> EXPRESS SHIPPING
							</p>
						</div>
						<div>
							<p className="text-sm mr-8">
								FREE <br /> RESIZING
							</p>
						</div>
						<div>
							<p className="text-sm">
								LIFETIME <br /> WARRANTY
							</p>
						</div>
						<div>
							<p className="text-sm ml-4">
								FREE RING <br /> CUSTOMISATION
							</p>
						</div>
					</div>
				)}

				{isMobile && (
					<div>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="quick-links">
								<AccordionTrigger className="flex item-center justify-center text-xs">
									QUICK LINKS
								</AccordionTrigger>
								<AccordionContent>
									<ul className="space-y-2 text-xs text-center">
										{quickLinks.map((link) => (
											<li key={link}>{link}</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="about-us">
								<AccordionTrigger className="flex item-center justify-center text-xs">
									ABOUT US
								</AccordionTrigger>
								<AccordionContent>
									<ul className="space-y-2 text-xs text-center">
										{aboutUs.map((link) => (
											<li key={link}>{link}</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="client-care">
								<AccordionTrigger className="flex item-center justify-center text-xs">
									CLIENT CARE
								</AccordionTrigger>
								<AccordionContent>
									<ul className="space-y-2 text-xs text-center">
										{clientCare.map((link, index) => (
											<li key={link}>{link}</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="contact-us">
								<AccordionTrigger className="flex item-center justify-center text-xs">
									CONTACT US
								</AccordionTrigger>
								<AccordionContent>
									<ul className="space-y-2 text-xs text-center">
										{contactUs.map((item) =>
											typeof item === "string" ? (
												<li key={item}>{item}</li>
											) : (
												<li
													key={item.text}
													className="flex items-center justify-center gap-2"
												>
													{item.icon}
													<span>{item.text}</span>
												</li>
											),
										)}
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<div className="mt-10 text-center w-full">
							<h3 className="font-bold text-sm mb-4">
								RING ADVICE, STRAIGHT TO YOUR INBOX
							</h3>
							<form className="flex flex-col md:flex-row items-center justify-center gap-4">
								<input
									type="email"
									placeholder="Your email address"
									className="p-2 rounded-md text-black w-full md:w-auto text-sm"
								/>
								<button
									type="button"
									className="bg-white text-teal-600 px-4 py-2 rounded-md font-semibold text-sm"
								>
									SUBMIT
								</button>
							</form>
						</div>
					</div>
				)}

				{!isMobile && (
					<div className="gap-8 w-full">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full ml-20">
							<div>
								<h3 className="font-bold text-xs mb-4">QUICK LINKS</h3>
								<div className="space-y-2 text-xs">
									{quickLinks.map((link, index) => (
										<div key={link}>{link}</div>
									))}
								</div>
							</div>

							<div>
								<h3 className="font-bold text-xs mb-4">ABOUT US</h3>
								<div className="space-y-2 text-xs">
									{aboutUs.map((link, index) => (
										<div key={link}>{link}</div>
									))}
								</div>
							</div>

							<div>
								<h3 className="font-bold text-xs mb-4">CLIENT CARE</h3>
								<div className="space-y-2 text-xs">
									{clientCare.map((link, index) => (
										<div key={link}>{link}</div>
									))}
								</div>
							</div>

							<div>
								<h3 className="font-bold text-xs mb-4">CONTACT US</h3>
								<div className="space-y-2 text-xs">
									{contactDetails.map((contact) => (
										<div
											key={contact.text}
											className="flex items-center gap-1 text-xs"
										>
											{contact.icon}
											<a href="#" className="text-white hover:underline">
												{contact.text}
											</a>
										</div>
									))}
									<div>
										<div className="font-semibold">CONTACT HOURS</div>
										<div>Mon-Wed: 3:30 AM - 11:30 AM</div>
										<div>Thu-Fri: 3:30 AM - 1:30 PM</div>
										<div>Sat: 2:30 AM - 10:30 AM</div>
									</div>
									<div>
										<a href="#" className="text-white hover:underline">
											Get In Touch
										</a>
									</div>
									<div>
										<a href="#" className="text-white hover:underline">
											Feedback
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-10 text-center w-full">
							<h3 className="font-bold text-sm mb-4">
								RING ADVICE, STRAIGHT TO YOUR INBOX
							</h3>
							<form className="flex flex-col md:flex-row items-center justify-center gap-4">
								<input
									type="email"
									placeholder="Your email address"
									className="p-2 rounded-md text-black w-full md:w-auto text-sm"
								/>
								<button
									type="button"
									className="bg-white text-teal-600 px-4 py-2 rounded-md font-semibold text-sm"
								>
									SUBMIT
								</button>
							</form>
						</div>
					</div>
				)}

				<div className="mt-10 text-center border-teal-400 pt-6 w-full">
					<div className="flex items-center justify-center gap-2">
						{socialIcons.map(({ icon, key }) => (
							<React.Fragment key={key}>{icon}</React.Fragment>
						))}
					</div>
					<div className="text-xs mt-2">
						Terms and Conditions | Terms of Sale | Privacy | Returns
						<div> | Site Map | Engagement Rings</div>
					</div>
					<p className="text-xs mt-2">
						All payments are 256-bit SSL secure and encrypted.
					</p>
					<div className="flex justify-center space-x-4 mt-4">
						<span className="text-xs">© 2024 Cullen Jewellery</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

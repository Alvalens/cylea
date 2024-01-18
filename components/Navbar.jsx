"use client";

import Link from "next/link";
import Image from "next/image";
import SignIn from "@/components/auth/SignIn";
import SignOut from "@/components/auth/SignOut";
import { useAuth } from "@/lib/auth/authContext";

export default function Navbar({ className }) {
	const { user } = useAuth();
	const NavLinks = [
		{
			title: "Beranda",
			link: "/",
		},
		{
			title: "Tentang",
			link: "/about",
		},
	];

	return (
		<nav className={className}>
			<div className='fixed top-0 inset-x-0 bg-[#1EA896] py-8'>
				<div className='h-full mx-auto md:flex items-center justify-between px-12 hidden'>
					<div className='flex items-center gap-2'>
						<Image
							src='/logo-panjang.png'
							alt='Cylea Long Logo'
							width={150}
							height={100}
						/>
					</div>

					{/* menus */}
					<div className='uppercase flex items-center gap-4 font-semibold text-[#baff29] text-base'>
						{NavLinks.map((link) => (
							<Link
								prefetch
								className='hover:underline'
								key={link.link}
								href={link.link}
							>
								{link.title}
							</Link>
						))}
						<button className='uppercase inline-flex justify-center items-center border-2 border-[#011627] rounded-xl bg-[#baff29] text-[#011627] font-semibold h-10 text-sm px-4 shadow-md'>
							<Link href='/subject'>langganan</Link>
						</button>
						{user ? <SignOut /> : <SignIn />}
						<div></div>
					</div>
				</div>
			</div>
			<div className='text-center text-9xl font-extrabold text-white py-52'>
				CYLEA
			</div>
		</nav>
	);
}

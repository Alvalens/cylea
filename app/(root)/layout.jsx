import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({ children }) {
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
		<>
			<nav className=''>
				<div className='fixed top-0 inset-x-0 bg-[#1EA896] py-4'>
					<div className='h-full mx-auto md:flex items-center justify-between px-12 hidden'>
						<div className='flex items-center gap-2'>
							<Image
								src='/logo-panjang.png'
								alt='Cylea Long Logo'
								width={100}
								height={24}
							/>
						</div>
						{/* menus */}
						<div className='flex items-center gap-4'>
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
							<div>langganan</div>
							<div>login</div>
						</div>
					</div>
				</div>
				<div className='text-center text-9xl font-extrabold text-white py-52'>
					CYLEA
				</div>
			</nav>

			<div className='rounded-t-3xl bg-white p-12'>{children}</div>
		</>
	);
}

import Image from "next/image";

export default function AdminLayout({ children }) {
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
							<div>add quizzes</div>
							<div>add material</div>
							<div>user-profile</div>
						</div>
					</div>
				</div>
			</nav>
			<div className='rounded-t-3xl bg-white p-12 mt-20'>{children}</div>
		</>
	);
}

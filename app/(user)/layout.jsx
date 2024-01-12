export default function Layout({ children }) {
	return (
		<>
			<div className='py-24 w-full rounded-b-3xl bg-[#639FAB] '>
				<div className='text-center text-9xl font-extrabold tracking-[1em] pl-[1em] text-white'>
					FISIKA
				</div>
			</div>
			<div className='container mx-auto mt-12'>
				<main>{children}</main>
			</div>
		</>
	);
}

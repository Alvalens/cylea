export default function Layout({ children }) {
	return (
		<>
			<div className='py-24 w-full rounded-b-3xl bg-[#1EA896] '>
				<div className='text-center text-9xl font-extrabold tracking-[1em] pl-[1em] text-white opacity-30'>
					FISIKA
				</div>
			</div>
			<div className='my-12'>
				<main>{children}</main>
			</div>
		</>
	);
}

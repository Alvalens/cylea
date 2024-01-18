export const metadata = {
	title: "CYLEA",
	description: "Choose Your Learning",
	icons: {
		icon: "/logo.png",
	},
};

export default function UserLayout({ children }) {
	return (
		<>
			<div className='py-24 w-full rounded-b-3xl bg-[#1EA896] absolute'>
				<div className='text-center text-9xl font-extrabold tracking-[1em] pl-[1em] text-white opacity-30'>
					FISIKA
				</div>
			</div>
			<div className='pb-16 pt-96 bg-white'>{children}</div>
		</>
	);
}

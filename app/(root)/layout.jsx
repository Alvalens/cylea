import Navbar from "@/components/Navbar";

export const metadata = {
	title: "CYLEA",
	description: "Choose Your Learning",
	icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<>
			<Navbar />
			<div className='rounded-t-3xl bg-white p-12'>{children}</div>
		</>
	);
}

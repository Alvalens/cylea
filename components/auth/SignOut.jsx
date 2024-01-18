"use client";

import { useAuth } from "@/lib/auth/authContext";
import { signOutWithGoogle, onAuthChange } from "@/lib/auth/auth";
import { useEffect } from "react";
import { LogOut } from "lucide-react";

export default function SignIn() {
	const { user } = useAuth(); // Destructure setUser from useAuth

	const handleSignOut = async () => {
		await signOutWithGoogle();
	};

	onAuthChange((authUser) => {
		console.log(authUser);
	});

	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<>
			<button
				onClick={handleSignOut}
				className='uppercase inline-flex justify-center items-center border-2 border-[#baff29] rounded-xl bg-[#011627] text-[#baff29] font-semibold h-10 text-sm px-4 shadow-md'
			>
				<LogOut className='w-4 h-4 mr-2' /> sign out
			</button>
		</>
	);
}

"use client";

import { useAuth } from "@/lib/auth/authContext";
import { signInWithGoogle } from "@/lib/auth/auth";
import { useEffect } from "react";
import GoogleIcons from "@/components/GoogleIcons";

export default function SignIn() {
	const { user } = useAuth(); // Destructure setUser from useAuth

	const handleSignIn = async () => {
		await signInWithGoogle();
	};


	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<>
			<button
				onClick={handleSignIn}
				className='uppercase inline-flex justify-center items-center border-2 border-[#baff29] rounded-xl bg-[#011627] text-[#baff29] font-semibold h-10 text-sm px-4 shadow-md'
			>
				<GoogleIcons className='w-4 h-4 mr-2' /> sign in
			</button>
		</>
	);
}

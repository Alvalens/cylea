'use client'
import { useAuth } from "@/lib/auth/authContext";
import {
	signInWithGoogle,
	signOutWithGoogle,
	onAuthChange,
} from "@/lib/auth/auth";
import { useEffect } from "react";

export default function Home() {
	const { user } = useAuth(); // Destructure setUser from useAuth

	const handleSignIn = async () => {
		await signInWithGoogle();
	};

	const handleSignOut = async () => {
		await signOutWithGoogle();
	};


	useEffect(() => {
		console.log(user);
	}, [user]);

	return (
		<div>
			<button onClick={handleSignIn}>Sign in</button>
			<button onClick={handleSignOut}>Sign out</button>
		</div>
	);
}

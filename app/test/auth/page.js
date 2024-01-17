'use client'
import { useAuth } from "@/lib/auth/authContext";
import {
	signInWithGoogle,
	signOutWithGoogle,
	onAuthChange,
} from "@/lib/auth/auth";
import { useEffect } from "react";

export default function Home() {
	const { user, setUser } = useAuth(); // Destructure setUser from useAuth

	const handleSignIn = async () => {
		const authUser = await signInWithGoogle();
		setUser(authUser); // Set the user in the context
	};

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
		<div>
			<button onClick={handleSignIn}>Sign in</button>
			<button onClick={handleSignOut}>Sign out</button>
		</div>
	);
}

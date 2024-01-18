"use client";
import { AuthProvider } from "@/lib/auth/authContext";
export default function Layout({ children }) {
	return (
		<>
			<AuthProvider>
				<h1>affected children</h1>
				<main>{children}</main>
			</AuthProvider>
		</>
	);
}

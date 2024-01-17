'use client'
import { AuthProvider } from "@/lib/auth/authContext";
export default function Layout({ children }) {
	return (
		<>
			<AuthProvider>
				<main>{children}</main>
			</AuthProvider>
		</>
	);
}

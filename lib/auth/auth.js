import { firebase } from "@/lib/config/firebase";
import {GoogleAuthProvider, getAuth, signInWithRedirect, signOut, onAuthStateChanged} from "firebase/auth";

const auth = getAuth(firebase);

export const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	user = await signInWithRedirect(auth, provider);
	return user;
}

export const signOutWithGoogle = async () => {
	await signOut(auth);
	return;
}

export default auth;


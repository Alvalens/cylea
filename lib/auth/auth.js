import { firebase } from "@/lib/config/firebase";
import { createContext, useContext, useState, useEffect } from "react";
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

export const onAuthChange = (callback) => {
	onAuthStateChanged(auth, callback);
	return;
}

export default auth;


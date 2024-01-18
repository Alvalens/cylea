import { firebase } from "@/lib/config/firebase";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const db = getFirestore(firebase);

export default async function addData(colllection, data) {
	let result = null;
	let error = null;

	try {
		result = await await addDoc(collection(db, colllection), data);
	} catch (e) {
		error = e;
	}

	return { result, error };
}


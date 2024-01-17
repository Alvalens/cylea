import { firebase } from "@/lib/config/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase);
export default async function getDoument(collection, id) {
	let docRef = doc(db, collection, id);

	let result = null;
	let error = null;

	try {
		result = await getDoc(docRef);
	} catch (e) {
		error = e;
	}

	return { result, error };
}

import { firebase } from "@/lib/config/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase);
export default async function getDoument(collection, id) {
	let docRef = doc(db, collection, id);

	let result = null;
	let error = null;

	try {
		result = await getDoc(docRef);
		result = result.data();
	} catch (e) {
		error = e;
	}

	return { result, error };
}

export async function getDoumentByField(collection, field, value) {
	let result = null;
	let error = null;

	try {
		const docRef = await db
			.collection(collection)
			.where(field, "==", value)
			.get();
		result = docRef.docs.map((doc) => doc.data());
	} catch (e) {
		error = e;
	}
}

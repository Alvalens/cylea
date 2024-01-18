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

// documentations
// getData(collection, id)
// collection = "materials" | "quiz"
// id = materialId | quizId
// getDataByField(collection, field, value)
// collection = "materials" | "quiz"
// field = "grade" | "subject" | "bab" | "etc"

// example
// const data = await getData("materials", 'bkuXx6J3rWWXScQJLDgc');
// const data = await getDataByField("materials", "grade", 10);

// for more field, please check the database
// https://console.firebase.google.com/u/0/project/cylea-db3b3/firestore/data/~2Fmaterials~2FbkuXx6J3rWWXScQJLDgc
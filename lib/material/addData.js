import { firebase } from "@/lib/config/firebase";
import { getFirestore} from "firebase/firestore";
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

// documentations
// addData(collection, data)
// collection = "materials" | "quiz"
// data = {
// 	name: "Pengenalan Gayaaaaa",
// 	subject: "fisika",
// 	grade: 10,
// 	bab: "1",
// 	urutan: 1,
// 	keywords: [ 
// 		"fisika kelas 10, gaya, pengenalan gaya, pengertian gaya, contoh gaya",
// 	],
// 	description:
// 		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!",
// 	content:
// 		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!",
// 	createdAt: new Date(),
// 	createdBy: "user-id",
// }
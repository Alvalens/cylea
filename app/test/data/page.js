"use client";
import addData from "@/lib/material/addData";

export default function Home() {
	const handleForm = async () => {
		const data = {
			name: "Pengenalan Gayaaaaa",
			subject: "fisika",
			grade: 10,
			bab: "1",
			keywords: [
				"fisika kelas 10, gaya, pengenalan gaya, pengertian gaya, contoh gaya",
			],
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!",
			createdAt: new Date(),
			createdBy: "user-id",
		};
		const result = await addData("materials", data);
		if (result) {
			return console.log(result);
		}
		if (error) {
			return console.log(error);
		}
	};

	return (
		<div>
			<button onClick={handleForm}>Add data</button>
		</div>
	);
}

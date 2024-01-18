"use client";
import { useAuth } from "@/lib/auth/authContext";
import addData from "@/lib/material/addData";
import getData from "@/lib/material/getData";
import { useState, useEffect } from "react";

export default function Home() {
	const user = useAuth();
	const [materials, setMaterials] = useState([]);
	useEffect(() => {
		const fetch = async () => {
			const data = await getData("materials", 'bkuXx6J3rWWXScQJLDgc');
			setMaterials(data);
      console.log(data);
		};
		fetch();
	}, []);

		useEffect(() => {
			console.log(user);
		}, [user]);


	const handleForm = async () => {
		const data = {
			name: "Pengenalan Gayaaaaa",
			subject: "fisika",
			grade: 10,
			bab: "1",
			urutan: 1,
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

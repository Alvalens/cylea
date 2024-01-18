"use client";

import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";
import { regenerateMaterial } from "@/lib/config/gemini";
import { useEffect, useState } from "react";
import json from "json5";
import React from "react";
import {
	Circle,
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	ChevronDown,
	ChevronUp,
} from "lucide-react";

export default function Page() {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	// accordion
	const [open, setOpen] = React.useState(0);
	const [alwaysOpen, setAlwaysOpen] = React.useState(true);
	const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	const keywords = ["pengertian gaya", "macam-macam gaya", "contoh gaya"];
	const material = "fisika kelas 7, gaya";

	// on click submit button
	const handleSubmit = async () => {
		setLoading(true);
		try {
			let response = await regenerateMaterial(keywords, material);

			// Parse the JSON response
			response = json.parse(response);

			setResponse(response);
		} catch (error) {
			console.error("Error handling submit:", error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		console.log(response);
	}, [response]);

	return (
		<>
			<div className="flex">
				<div className="container mx-auto px-24">
					<div className="border-2 rounded-2xl py-4 bg-[#011627]">
						<div className="text-center font-semibold uppercase text-3xl mx-52 text-white">
							Gaya
						</div>
					</div>
					<div className="mt-12 text-[#1EA896] text-3xl font-bold">
						Apa itu gaya?
					</div>
					<div className="mt-4 text-lg ">
						{loading ? (
							<p>Loading...</p>
						) : (
							<div className="text-justify text-xl">
								{response ? (
									<>
										{response.title && (
											<h1>{response.title}</h1>
										)}
										{response.content &&
											response.materi.map(
												(item, index) => (
													<p
														key={index}
														className="mb-3 justify-start text-justify"
														dangerouslySetInnerHTML={{
															__html: item,
														}}
													/>
												)
											)}
									</>
								) : (
									<>
										Gaya pada Fisika Gaya adalah salah satu
										konsep dasar dalam fisika. Gaya
										didefinisikan sebagai interaksi apa pun
										yang dapat menyebabkan sebuah benda
										bermassa mengalami perubahan gerak, baik
										dalam bentuk arah, maupun konstruksi
										geometris. Dengan kata lain, sebuah gaya
										dapat menyebabkan sebuah objek dengan
										massa tertentu mengalami perubahan
										kecepatan. Perubahan kecepatan dapat
										terjadi dari kondisi benda diam menjadi
										bergerak, kondisi benda yang mengalami
										pertambahan kecepatan (berakselerasi),
										maupun mengalami perlambatan kecepatan.
										<Image
											className="my-8 mx-auto"
											src="/dummy_1.png"
											alt="Cylea Long Logo"
											width={250}
											height={0}
										/>
										Gaya memiliki besaran (magnitude) dan
										arah sehingga termasuk dalam besaran
										vektor. Besaran gaya diukur dalam satuan
										Newton (N), sedangkan arah gaya
										ditentukan oleh arah garis gaya. Garis
										gaya adalah garis yang menunjukkan arah
										gaya yang bekerja pada suatu benda.
									</>
								)}
							</div>
						)}
					</div>
				</div>

				{/* sidebar */}
				<div className="bg-gray-100 rounded-l-3xl w-96 h-auto p-6">
					<button className="text-white bg-black rounded-3xl w-12 h-12 inline-flex justify-center items-center mb-4">
						<ChevronRight />
					</button>
					<Accordion open={alwaysOpen}>
						<AccordionHeader
							className="justify-start"
							onClick={handleAlwaysOpen}>
							<ChevronUp className="mr-2" />
							Gaya
							<div className="ml-auto text-sm">
								0%&nbsp;selesai
								<span className="font-medium ml-1">1/5</span>
							</div>
						</AccordionHeader>
						<AccordionBody>
							<div className="flex">
								<div className="border border-black w-0 opacity-10" />
								<div className="flex flex-col gap-4">
									<div className="inline-flex items-center font-semibold text-base text-black">
										<Circle className="ml-4 mr-2 h-4 w-4 " />{" "}
										Apa itu Gaya?
									</div>
									<div className="inline-flex items-center font-medium text-base">
										<Circle className="ml-4 mr-2 h-4 w-4" />{" "}
										Penyebab Timbulnya Gaya
									</div>
									<div className="inline-flex items-center font-medium text-base">
										<Circle className="ml-4 mr-2 h-4 w-4" />{" "}
										Peran Pentingnya Gaya
									</div>
									<div className="inline-flex items-center font-medium text-base">
										<Circle className="ml-4 mr-2 h-4 w-4" />{" "}
										Contoh Gaya di Sekitar Kita
									</div>
									<div className="inline-flex items-center font-medium text-base">
										<Circle className="ml-4 mr-2 h-4 w-4" />{" "}
										Uji Kemampuan : Gaya
									</div>
								</div>
							</div>
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 1}>
						<AccordionHeader
							className="justify-start"
							onClick={() => handleOpen(1)}>
							<ChevronDown
								className={`${
									1 === open ? "-rotate-180" : ""
								} h-5 w-5 transition-transform mr-2`}
							/>
							Usaha
						</AccordionHeader>
						<AccordionBody>
							<div className="border border-black h-12 w-0 opacity-10" />
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 2}>
						<AccordionHeader
							className="justify-start"
							onClick={() => handleOpen(2)}>
							<ChevronDown
								className={`${
									2 === open ? "-rotate-180" : ""
								} h-5 w-5 transition-transform mr-2`}
							/>
							Energi
						</AccordionHeader>
						<AccordionBody>
							<div className="border border-black h-12 w-0 opacity-10" />
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 3}>
						<AccordionHeader
							className="justify-start"
							onClick={() => handleOpen(3)}>
							<ChevronDown
								className={`${
									3 === open ? "-rotate-180" : ""
								} h-5 w-5 transition-transform mr-2`}
							/>
							Kekekalan Energi
						</AccordionHeader>
						<AccordionBody>
							<div className="border border-black h-12 w-0 opacity-10" />
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 4}>
						<AccordionHeader
							className="justify-start"
							onClick={() => handleOpen(4)}>
							<ChevronDown
								className={`${
									4 === open ? "-rotate-180" : ""
								} h-5 w-5 transition-transform mr-2`}
							/>
							Termodinamika
						</AccordionHeader>
						<AccordionBody>
							<div className="border border-black h-12 w-0 opacity-10" />
						</AccordionBody>
					</Accordion>
				</div>
			</div>

			<div className="mt-16 mx-auto space-y-4 max-w-80">
				<button
					type="submit"
					onClick={handleSubmit}
					className="uppercase border-2 border-black rounded-xl py-4 shadow-lg shadow-gray-400 bg-[#BBFF29] w-80">
					<p className="text-center font-bold">sederhanakan?</p>
				</button>
				<div className="flex space-x-2">
					<button
						disabled
						className="inline-flex justify-center items-center rounded-lg bg-[#BBFF29] shadow-md shadow-gray-400 w-10 h-10 border-2 border-black disabled:opacity-30">
						<ChevronLeft />
					</button>
					<button className="rounded-lg bg-[#011627] shadow-md shadow-gray-400 w-10 h-10">
						<p className="text-white font-semibold text-center">
							1
						</p>
					</button>
					<button className="rounded-lg bg-[#DED6D6] shadow-md shadow-gray-400 w-10 h-10">
						<p className="font-semibold text-center">2</p>
					</button>
					<button className="rounded-lg bg-[#DED6D6] shadow-md shadow-gray-400 w-10 h-10">
						<p className="font-semibold text-center">3</p>
					</button>
					<button className="rounded-lg bg-[#DED6D6] shadow-md shadow-gray-400 w-10 h-10">
						<p className="font-semibold text-center">4</p>
					</button>
					<button className="rounded-lg bg-[#DED6D6] shadow-md shadow-gray-400 w-10 h-10">
						<p className="font-semibold text-center">5</p>
					</button>
					<button className="inline-flex justify-center items-center rounded-lg bg-[#BBFF29] shadow-md shadow-gray-400 w-10 h-10 border-2 border-black">
						<ChevronRight />
					</button>
				</div>
			</div>
		</>
	);
}

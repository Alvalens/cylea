"use client";

import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	Button,
} from "@material-tailwind/react";
import {
	Circle,
	CheckCircle2,
	ChevronRight,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Page() {
	// accordion
	const [open, setOpen] = React.useState(0);
	const [alwaysOpen, setAlwaysOpen] = React.useState(true);
	const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	return (
		<>
			<div className='flex'>
				<div className='container mx-auto px-24'>
					<div className='border-2 rounded-2xl py-4 bg-[#011627]'>
						<div className='text-center font-semibold uppercase text-3xl mx-52 text-white'>
							Gaya
						</div>
					</div>
					<div className='mt-12 text-[#1EA896] text-3xl font-bold mb-6'>
						Uji Kemampuan : Gaya
					</div>
					<Button className='rounded-xl h-12 w-40 font-bold border-2 border-black bg-[#baff29] text-black'>
						<Link href={`gaya/fisika-gaya=quiz`}>Mulai Quizz</Link>
					</Button>
				</div>

				{/* sidebar */}
				<div className='bg-gray-100 rounded-l-3xl w-96 h-auto p-6'>
					<button className='text-white bg-black rounded-3xl w-12 h-12 inline-flex justify-center items-center mb-4'>
						<ChevronRight />
					</button>
					<Accordion open={alwaysOpen}>
						<AccordionHeader
							className='justify-start'
							onClick={handleAlwaysOpen}
						>
							<ChevronUp className='mr-2' />
							Gaya
							<div className='ml-auto text-sm'>
								80%&nbsp;selesai<span className='font-medium ml-1'>1/5</span>
							</div>
						</AccordionHeader>
						<AccordionBody>
							<div className='flex'>
								<div className='border border-black w-0 opacity-10' />
								<div className='flex flex-col gap-4'>
									<div className='inline-flex items-center font-semibold text-base text-[#1EA896]'>
										<CheckCircle2 className='ml-4 mr-2 h-4 w-4 ' /> Apa itu
										Gaya?
									</div>
									<div className='inline-flex items-center font-semibold text-base text-[#1EA896]'>
										<CheckCircle2 className='ml-4 mr-2 h-4 w-4' /> Penyebab
										Timbulnya Gaya
									</div>
									<div className='inline-flex items-center font-semibold text-base text-[#1EA896]'>
										<CheckCircle2 className='ml-4 mr-2 h-4 w-4' /> Peran
										Pentingnya Gaya
									</div>
									<div className='inline-flex items-center font-semibold text-base text-[#1EA896]'>
										<CheckCircle2 className='ml-4 mr-2 h-4 w-4' /> Contoh Gaya
										di Sekitar Kita
									</div>
									<div className='inline-flex items-center font-semibold text-base text-black'>
										<Circle className='ml-4 mr-2 h-4 w-4' /> Uji Kemampuan :
										Gaya
									</div>
								</div>
							</div>
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 1}>
						<AccordionHeader
							className='justify-start'
							onClick={() => handleOpen(1)}
						>
							<ChevronDown
								className={`${
									1 === open ? "-rotate-180" : ""
								} h-5 w-5 transition-transform mr-2`}
							/>
							Usaha
						</AccordionHeader>
						<AccordionBody>
							<div className='border border-black h-12 w-0 opacity-10' />
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 2}>
						<AccordionHeader
							className='justify-start'
							onClick={() => handleOpen(2)}
						>
							<ChevronDown
								className={`${
									2 === open ? "-rotate-180" : ""
								} h-5 w-5 transition-transform mr-2`}
							/>
							Energi
						</AccordionHeader>
						<AccordionBody>
							<div className='border border-black h-12 w-0 opacity-10' />
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 3}>
						<AccordionHeader
							className='justify-start'
							onClick={() => handleOpen(3)}
						>
							<ChevronDown
								className={`${
									3 === open ? "-rotate-180" : ""
								} h-5 w-5 transition-transform mr-2`}
							/>
							Kekekalan Energi
						</AccordionHeader>
						<AccordionBody>
							<div className='border border-black h-12 w-0 opacity-10' />
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 4}>
						<AccordionHeader
							className='justify-start'
							onClick={() => handleOpen(4)}
						>
							<ChevronDown
								className={`${
									4 === open ? "-rotate-180" : ""
								} h-5 w-5 transition-transform mr-2`}
							/>
							Termodinamika
						</AccordionHeader>
						<AccordionBody>
							<div className='border border-black h-12 w-0 opacity-10' />
						</AccordionBody>
					</Accordion>
				</div>
			</div>
		</>
	);
}

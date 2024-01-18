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
					<div className='text-xl font-bold uppercase mb-2'>
						soal fisika : gaya
					</div>
					<div className='flex w-max gap-3'>
						<Button className=' bg-[#1EA896] shadow-md text-lg font-bold'>
							1
						</Button>
						<Button className=' bg-[#ded6d6] shadow-md text-lg font-bold text-black'>
							2
						</Button>
						<Button className=' bg-[#ded6d6] shadow-md text-lg font-bold text-black'>
							3
						</Button>
						<Button className=' bg-[#ded6d6] shadow-md text-lg font-bold text-black'>
							4
						</Button>
						<Button className=' bg-[#ded6d6] shadow-md text-lg font-bold text-black'>
							5
						</Button>
					</div>

					<hr className='border my-8' />

					{/* QUIZ */}
					<div className='text-xl font-bold'>1. Gaya adalah...</div>
					<div className='mt-4 space-y-4'>
						<div className='flex items-center'>
							<input
								type='radio'
								name='option'
								id='a'
								value='a'
								className='peer hidden'
							/>
							<label
								for='a'
								className='inline-flex items-center justify-center w-14 h-12 bg-[#ded6d6] font-bold cursor-pointer select-none rounded-lg p-2 peer-checked:bg-[#011627] peer-checked:font-bold peer-checked:text-white'
							>
								A
							</label>
							<label for='a' className='ml-4 font-bold text-lg cursor-pointer'>
								Ketahanan suatu benda terhadap perubahan geraknya
							</label>
						</div>

						<div className='flex items-center'>
							<input
								type='radio'
								name='option'
								id='b'
								value='b'
								className='peer hidden'
							/>
							<label
								for='b'
								className='inline-flex items-center justify-center w-14 h-12 bg-[#ded6d6] font-bold cursor-pointer select-none rounded-lg p-2 peer-checked:bg-[#011627] peer-checked:font-bold peer-checked:text-white'
							>
								B
							</label>
							<label for='b' className='ml-4 font-bold text-lg cursor-pointer'>
								Kecepatan suatu objek
							</label>
						</div>

						<div className='flex items-center'>
							<input
								type='radio'
								name='option'
								id='c'
								value='c'
								className='peer hidden'
							/>
							<label
								for='c'
								className='inline-flex items-center justify-center w-14 h-12 bg-[#ded6d6] font-bold cursor-pointer select-none rounded-lg p-2 peer-checked:bg-[#011627] peer-checked:font-bold peer-checked:text-white'
							>
								C
							</label>
							<label for='c' className='ml-4 font-bold text-lg cursor-pointer'>
								Pengaruh yang dapat menyebabkan perubahan gerak benda
							</label>
						</div>

						<div className='flex items-center'>
							<input
								type='radio'
								name='option'
								id='d'
								value='d'
								className='peer hidden'
							/>
							<label
								for='d'
								className='inline-flex items-center justify-center w-14 h-12 bg-[#ded6d6] font-bold cursor-pointer select-none rounded-lg p-2 peer-checked:bg-[#011627] peer-checked:font-bold peer-checked:text-white'
							>
								D
							</label>
							<label for='d' className='ml-4 font-bold text-lg cursor-pointer'>
								Perpindahan suatu objek
							</label>
						</div>

						<div className='flex items-center'>
							<input
								type='radio'
								name='option'
								id='e'
								value='e'
								className='peer hidden'
							/>
							<label
								for='e'
								className='inline-flex items-center justify-center w-14 h-12 bg-[#ded6d6] font-bold cursor-pointer select-none rounded-lg p-2 peer-checked:bg-[#011627] peer-checked:font-bold peer-checked:text-white'
							>
								E
							</label>
							<label for='e' className='ml-4 font-bold text-lg cursor-pointer'>
								Usaha untuk melakukan sesuatu
							</label>
						</div>
					</div>

					{/* navigation */}
					<div className='flex mt-20 justify-between uppercase'>
						<Button disabled className='rounded-xl h-12 w-40 font-bold'>
							sebelumnya
						</Button>
						<Button className='rounded-xl h-12 w-40 font-bold border-2 border-black bg-[#baff29] text-black'>
							selanjutnya
						</Button>
					</div>
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

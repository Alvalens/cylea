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

const quizData = [
	{
		id: "1",
		question: "1. Gaya adalah...",
		options: [
			{
				answer: "Ketahanan suatu benda terhadap perubahan geraknya",
				isCorrect: false,
			},
			{
				answer: "Kecepatan suatu objek",
				isCorrect: false,
			},
			{
				answer: "Pengaruh yang dapat menyebabkan perubahan gerak benda",
				isCorrect: true,
			},
			{
				answer: "Perpindahan suatu objek",
				isCorrect: false,
			},
			{
				answer: "Usaha untuk melakukan sesuatu",
				isCorrect: false,
			},
		],
	},
	{
		id: "2",
		question: "2. Satuan gaya dalam SI adalah...",
		options: [
			{
				answer: "Joule",
				isCorrect: false,
			},
			{
				answer: "Newton",
				isCorrect: true,
			},
			{
				answer: "Kilogram",
				isCorrect: false,
			},
			{
				answer: "Meter",
				isCorrect: false,
			},
			{
				answer: "Liter",
				isCorrect: false,
			},
		],
	},
	{
		id: "3",
		question: "3. Gaya yang menyebabkan benda jatuh ke bawah disebut...",
		options: [
			{
				answer: "Gaya gravitasi",
				isCorrect: true,
			},
			{
				answer: "Gaya gesek",
				isCorrect: false,
			},
			{
				answer: "Gaya tarik menarik",
				isCorrect: false,
			},
			{
				answer: "Gaya dorong",
				isCorrect: false,
			},
			{
				answer: "Gaya magnet",
				isCorrect: false,
			},
		],
	},
	{
		id: "4",
		question: "4. Gaya yang bekerja pada benda yang diam disebut...",
		options: [
			{
				answer: "Gaya statis",
				isCorrect: true,
			},
			{
				answer: "Gaya dinamis",
				isCorrect: false,
			},
			{
				answer: "Gaya gesek",
				isCorrect: false,
			},
			{
				answer: "Gaya tarik menarik",
				isCorrect: false,
			},
			{
				answer: "Gaya kinetik",
				isCorrect: false,
			},
		],
	},
	{
		id: "5",
		question: "5. Gaya yang bekerja pada benda yang bergerak disebut...",
		options: [
			{
				answer: "Gaya statis",
				isCorrect: false,
			},
			{
				answer: "Gaya dinamis",
				isCorrect: true,
			},
			{
				answer: "Gaya gesek",
				isCorrect: false,
			},
			{
				answer: "Gaya tarik menarik",
				isCorrect: false,
			},
			{
				answer: "Gaya gravitasi",
				isCorrect: false,
			},
		],
	},
];

export default function Page({ id }) {
	// accordion
	const [open, setOpen] = React.useState(0);
	const [alwaysOpen, setAlwaysOpen] = React.useState(true);
	const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	// quiz
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const [score, setScore] = React.useState(0);
	const [quizCompleted, setQuizCompleted] = React.useState(false);
	const [userAnswers, setUserAnswers] = React.useState(
		new Array(quizData.length).fill(null)
	);

	const handleOptionSelect = (isCorrect, optionIndex) => {
		const updatedUserAnswers = [...userAnswers];

		if (isCorrect) {
			setScore(score + 1);
		}

		updatedUserAnswers[currentQuestion] = optionIndex;
		setUserAnswers(updatedUserAnswers);

		console.log(updatedUserAnswers);
	};

	const handleNextQuestion = () => {
		if (currentQuestion < quizData.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setQuizCompleted(true);
		}
	};

	const handlePrevQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	const handleNavigateToQuestion = (questionNumber) => {
		setCurrentQuestion(questionNumber - 1);
	};

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
					{quizCompleted ? (
						<div className='space-y-4'>
							<div className='font-bold text-xl'>
								<p>Skor Akhir</p>
								<div
									className={`${
										score * 20 < 80 ? "text-red-500" : "text-teal-500"
									}`}
								>
									{score * 20}%
								</div>
							</div>
							<div className='font-bold text-xl'>
								<p className='mb-1'>Status</p>
								{score * 20 < 80 ? (
									<div className='text-red-500 border-2 border-red-500 rounded-lg w-32 text-center'>
										Tidak Lulus
									</div>
								) : (
									<div className='text-teal-500 border-2 border-teal-500 rounded-lg w-32 text-center'>
										Lulus
									</div>
								)}
							</div>
						</div>
					) : (
						<div>
							<div className='text-xl font-bold uppercase mb-2'>
								soal fisika : gaya
							</div>
							<div className='flex w-max gap-3'>
								{[...Array(quizData.length).keys()].map((questionNumber) => (
									<Button
										key={questionNumber}
										className={`bg-[#ded6d6] shadow-md text-lg font-bold text-black ${
											currentQuestion === questionNumber
												? "text-white bg-[#1EA896]"
												: userAnswers[questionNumber] !== null
												? "bg-black text-white"
												: ""
										}`}
										onClick={() => handleNavigateToQuestion(questionNumber + 1)}
									>
										{questionNumber + 1}
									</Button>
								))}
							</div>

							<hr className='border my-8' />

							{/* QUIZ */}
							<div>
								<div className='text-xl font-bold'>
									{quizData[currentQuestion].question}
								</div>
								<div className='mt-4 space-y-4'>
									{quizData[currentQuestion].options.map((option, index) => (
										<div className='flex items-center' key={index}>
											<input
												type='radio'
												name={`option-${currentQuestion}`}
												id={`option-${index}`}
												value={`option-${index}`}
												className='peer hidden'
												checked={userAnswers[currentQuestion] === index}
												onChange={() =>
													handleOptionSelect(option.isCorrect, index)
												}
											/>
											<label
												htmlFor={`option-${index}`}
												className='inline-flex items-center justify-center w-14 h-12 bg-[#ded6d6] font-bold cursor-pointer select-none rounded-lg p-2 peer-checked:bg-[#011627] peer-checked:font-bold peer-checked:text-white'
											>
												{String.fromCharCode(65 + index)}
											</label>
											<label
												htmlFor={`option-${index}`}
												className='ml-4 font-bold text-lg cursor-pointer'
											>
												{option.answer}
											</label>
										</div>
									))}
								</div>
							</div>

							<div className='flex mt-20 justify-between uppercase'>
								<Button
									disabled={currentQuestion === 0}
									onClick={handlePrevQuestion}
									className='rounded-xl h-12 w-40 font-bold'
								>
									Sebelumnya
								</Button>
								<Button
									onClick={handleNextQuestion}
									className={`rounded-xl h-12 w-40 font-bold border-2 border-black bg-${
										currentQuestion === quizData.length - 1
											? "[#baff29]"
											: "white"
									} text-black`}
								>
									{currentQuestion === quizData.length - 1
										? "Submit"
										: "Selanjutnya"}
								</Button>
							</div>
						</div>
					)}
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

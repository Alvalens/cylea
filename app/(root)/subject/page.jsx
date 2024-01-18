import { Search, Atom, Sprout, FlaskConical, SigmaSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<div className='flex space-x-2 justify-center'>
				<div className='relative'>
					<input
						className='inline-flex items-center bg-[#011627] rounded-xl h-12 w-96 px-4 pl-12 text-white'
						placeholder='Mau belajar apa?'
					/>
					<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
						<Search className='h-6 w-6 text-white' />
					</div>
				</div>
				<button className='inline-flex items-center justify-center border-2 border-black rounded-xl shadow-xl h-12 w-24 bg-[#BBFF29]'>
					<div className='uppercase font-bold text-center text-lg'>cari</div>
				</button>
			</div>

			<div className='grid grid-cols-3 gap-12 mt-12 text-center'>
				<button className='rounded-xl bg-[#1ea896] text-white shadow-lg shadow-gray-400 h-80 p-10 '>
					<Link href='/chapter'>
						<div className='font-semibold uppercase text-3xl mb-8'>fisika</div>
						<div className='items-center justify-center flex'>
							<Atom className='text-black h-40 w-40' />
						</div>
					</Link>
				</button>
				<button className='rounded-xl bg-[#1ea896] text-white shadow-lg shadow-gray-400 h-80 p-10'>
					<div className='font-semibold uppercase text-3xl mb-8'>biologi</div>
					<div className='items-center justify-center flex'>
						<Sprout className='text-black h-40 w-40' />
					</div>
				</button>
				<button className='rounded-xl bg-[#1ea896] text-white shadow-lg shadow-gray-400 h-80 p-10'>
					<div className='font-semibold uppercase text-3xl mb-8'>kimia</div>
					<div className='items-center justify-center flex'>
						<FlaskConical className='text-black h-40 w-40' />
					</div>
				</button>
				<button className='rounded-xl bg-[#1ea896] text-white shadow-lg shadow-gray-400 h-80 p-10'>
					<div className='font-semibold uppercase text-3xl mb-8'>
						matematika
					</div>
					<div className='items-center justify-center flex'>
						<SigmaSquare className='text-black h-40 w-40' />
					</div>
				</button>
				<button className='rounded-xl bg-[#1ea896] text-white shadow-lg shadow-gray-400 h-80 p-10'>
					<div className='font-semibold uppercase text-3xl mb-8'>
						bahasa indonesia
					</div>
					<div className='items-center justify-center flex'>
						<Image
							className='p-2'
							src='/indonesia.png'
							alt='Cylea Long Logo'
							width={160}
							height={40}
						/>
					</div>
				</button>
				<button className='rounded-xl bg-[#1ea896] text-white shadow-lg shadow-gray-400 h-80 p-10'>
					<div className='font-semibold uppercase text-3xl mb-8'>
						bahasa inggris
					</div>
					<div className='items-center justify-center flex'>
						<Image
							className='p-2'
							src='/english.png'
							alt='Cylea Long Logo'
							width={160}
							height={40}
						/>
					</div>
				</button>
			</div>
		</>
	);
}

import { Search, Atom, Sprout, FlaskConical, SigmaSquare } from "lucide-react";

export default function Page() {
	return (
		<>
			<div className='flex space-x-2 justify-center'>
				<div className='inline-flex items-center bg-[#011627] rounded-xl h-12 w-96 px-4'>
					<div className='flex font-light text-lg text-white'>
						<Search className='h-6 w-6 mr-2' />
						Mau belajar apa?
					</div>
				</div>
				<div className='inline-flex items-center justify-center border-2 border-black rounded-xl shadow-xl h-12 w-24 bg-[#BBFF29]'>
					<div className='uppercase font-bold text-center text-lg'>cari</div>
				</div>
			</div>
			<div className='grid grid-cols-3 gap-12 mt-12 uppercase text-center'>
				<div className='rounded-lg border bg-[#1ea896] text-white shadow-lg h-80 p-10 '>
					<div className='font-semibold text-xl mb-8'>fisika</div>
					<div className='items-center justify-center flex'>
						<Atom className='text-black h-40 w-40' />
					</div>
				</div>
				<div className='rounded-lg border bg-[#1ea896] text-white shadow-lg h-80 p-10'>
					<div className='font-semibold text-xl mb-8'>biologi</div>
					<div className='items-center justify-center flex'>
						<Sprout className='text-black h-40 w-40' />
					</div>
				</div>
				<div className='rounded-lg border bg-[#1ea896] text-white shadow-lg h-80 p-10'>
					<div className='font-semibold text-xl mb-8'>kimia</div>
					<div className='items-center justify-center flex'>
						<FlaskConical className='text-black h-40 w-40' />
					</div>
				</div>
				<div className='rounded-lg border bg-[#1ea896] text-white shadow-lg h-80 p-10'>
					<div className='font-semibold text-xl mb-8'>matematika</div>
					<div className='items-center justify-center flex'>
						<SigmaSquare className='text-black h-40 w-40' />
					</div>
				</div>
				<div className='rounded-lg border bg-[#1ea896] text-white shadow-lg h-80 p-10'>
					<div className='font-semibold text-xl mb-8'>bahasa indonesia</div>
				</div>
				<div className='rounded-lg border bg-[#1ea896] text-white shadow-lg h-80 p-10'>
					<div className='font-semibold text-xl mb-8'>bahasa inggris</div>
				</div>
			</div>
		</>
	);
}

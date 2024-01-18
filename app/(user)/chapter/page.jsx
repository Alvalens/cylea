import Link from "next/link";

export default function Page() {
	return (
		<>
			<div className='grid grid-cols-1 space-y-12 py-4'>
				<button className='rounded-3xl py-8 bg-[#011627] mx-96 shadow-lg shadow-gray-400'>
					<Link href='/material'>
						<div className='text-center font-bold uppercase text-5xl text-white'>
							gaya
						</div>
					</Link>
				</button>
				<button className='rounded-3xl py-8 bg-[#011627] mx-96 shadow-lg shadow-gray-400'>
					<div className='text-center font-bold uppercase text-5xl text-white'>
						usaha
					</div>
				</button>
				<button className='rounded-3xl py-8 bg-[#011627] mx-96 shadow-lg shadow-gray-400'>
					<div className='text-center font-bold uppercase text-5xl text-white'>
						energi
					</div>
				</button>
				<button className='rounded-3xl py-8 bg-[#011627] mx-96 shadow-lg shadow-gray-400'>
					<div className='text-center font-bold uppercase text-5xl text-white'>
						kekekalan energi
					</div>
				</button>
				<button className='rounded-3xl py-8 bg-[#011627] mx-96 shadow-lg shadow-gray-400'>
					<div className='text-center font-bold uppercase text-5xl text-white'>
						termodinamika
					</div>
				</button>
			</div>
		</>
	);
}

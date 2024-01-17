export default function Dashboard() {
	return (
		<>
			<div className='flex mt-12'>
				<div className='w-full space-y-6'>
					<div className='text-center font-extrabold text-3xl mb-8'>
						List of Materials
					</div>
					<div className='bg-[#ded6d6] mx-12 rounded-lg h-20 shadow-lg'>
						materi 1
					</div>
					<div className='bg-[#ded6d6] mx-12 rounded-lg h-20 shadow-lg'>
						materi 2
					</div>
				</div>
				<div className='grow border-2 border-[#ded6d6] opacity-50' />
				<div className='w-full space-y-6'>
					<div className='text-center font-extrabold text-3xl mb-8'>
						List of Quizzes
					</div>
					<div className='bg-[#ded6d6] mx-12 rounded-lg h-20 shadow-lg'>
						quiz 1
					</div>
					<div className='bg-[#ded6d6] mx-12 rounded-lg h-20 shadow-lg'>
						quiz 2
					</div>
				</div>
			</div>
		</>
	);
}

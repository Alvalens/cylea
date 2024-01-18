import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className='flex my-20'>
				<div className='inline-flex justify-center w-screen'>
					<Image
						src='/logo-tulis.png'
						alt='Cylea Long Logo'
						width={250}
						height={0}
					/>
				</div>
				<div className='w-screen pr-24'>
					<h1 className='font-extrabold text-center text-4xl mb-8'>
						APA ITU CYLEA?
					</h1>
					<p className='text-justify font-semibold text-xl'>
						CYLEA (Choose Your Learning) adalah platform pembelajaran berbasis
						AI. Dimana pada Aplikasi ini, terdapat personalized learning atau
						pembelajaran yang terpersonalisasi, yaitu fitur untuk membantu
						pengguna untuk menyesuaikan kemampuan belajarnya sehingga
						mempermudah pengguna dalam memahami materi. Fitur ini Kemudian
						didukung generation soal dan materi secara otomatis berdasarkan
						hasil personalized learning. Kedua fitur tersebut didukung dengan
						teknologi AI, sehingga memberikan hasil belajar yang lebih optimal.
					</p>
				</div>
			</div>
		</>
	);
}

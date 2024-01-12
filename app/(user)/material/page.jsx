"use client";
import { regenerateMaterial } from "@/lib/config/gemini";
import { useEffect, useState } from "react";
import json from "json5";
import React from "react";

export default function Page() {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

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
			<div className='flex'>
				<div className='container mx-auto px-24'>
					<div className='border-2 rounded-2xl py-4 bg-[#011627]'>
						<div className='text-center font-semibold uppercase text-3xl mx-52 text-white'>
							Gaya
						</div>
					</div>
					<div className='mt-12 text-[#1EA896] text-2xl font-bold'>
						Apa itu gaya?
					</div>
					<div className='mt-4 text-lg '>
						{loading ? (
							<p>Loading...</p>
						) : (
							<div>
								{response ? (
									<>
										{response.judul && <h1>{response.judul}</h1>}
										{response.materi &&
											response.materi.map((item, index) => (
												<p
													key={index}
													className='mb-3 justify-start text-justify'
													dangerouslySetInnerHTML={{
														__html: item,
													}}
												/>
											))}
									</>
								) : (
									<>
										Gaya pada Fisika Gaya adalah salah satu konsep dasar dalam
										fisika. Gaya didefinisikan sebagai interaksi apa pun yang
										dapat menyebabkan sebuah benda bermassa mengalami perubahan
										gerak, baik dalam bentuk arah, maupun konstruksi geometris.
										Dengan kata lain, sebuah gaya dapat menyebabkan sebuah objek
										dengan massa tertentu mengalami perubahan kecepatan.
										Perubahan kecepatan dapat terjadi dari kondisi benda diam
										menjadi bergerak, kondisi benda yang mengalami pertambahan
										kecepatan (berakselerasi), maupun mengalami perlambatan
										kecepatan. Gaya memiliki besaran (magnitude) dan arah
										sehingga termasuk dalam besaran vektor. Besaran gaya diukur
										dalam satuan Newton (N), sedangkan arah gaya ditentukan oleh
										arah garis gaya. Garis gaya adalah garis yang menunjukkan
										arah gaya yang bekerja pada suatu benda. Gaya dapat
										disebabkan oleh berbagai faktor, antara lain: Kontak
										langsung, yaitu gaya yang bekerja pada suatu benda karena
										adanya kontak langsung dengan benda lain. Contohnya, gaya
										gesek, gaya normal, dan gaya tarik-menarik antara dua
										magnet. Medan, yaitu gaya yang bekerja pada suatu benda
										karena adanya medan tertentu. Contohnya, gaya
										gravitasi, gaya elektrostatik, dan gaya magnetik. Gaya
										memiliki peran penting dalam berbagai fenomena fisika,
										antara lain: Gerak, yaitu perubahan posisi suatu benda dari
										satu tempat ke tempat lain. Gaya dapat menyebabkan gerak
										benda, baik gerak lurus, gerak melingkar, maupun gerak
										parabola. Kerja, yaitu perpindahan energi yang dihasilkan
										oleh gaya. Gaya dapat melakukan kerja dengan menggerakkan
										benda.
										<div className='my-4'>-image-</div>
										Energi, yaitu kemampuan untuk melakukan kerja. Gaya dapat
										mengubah energi benda, misalnya dari energi potensial
										menjadi energi kinetik. Berikut adalah beberapa contoh gaya
										dalam kehidupan sehari-hari: Gaya otot, yaitu gaya yang
										dihasilkan oleh otot manusia atau hewan. Gaya otot digunakan
										untuk menggerakkan tubuh, misalnya untuk
										berjalan, berlari, atau mengangkat benda. Gaya
										gravitasi, yaitu gaya tarik-menarik antara dua benda
										bermassa. Gaya gravitasi menyebabkan benda-benda jatuh ke
										bawah. Gaya gesek, yaitu gaya yang berlawanan arah dengan
										arah gerak benda. Gaya gesek menyebabkan benda sulit
										bergerak. Gaya magnet, yaitu gaya tarik-menarik atau
										tolak-menolak antara dua magnet. Gaya magnet menyebabkan
										magnet dapat menempel pada benda lain. Gaya merupakan konsep
										penting dalam fisika yang memiliki peran penting dalam
										berbagai fenomena fisika. Pemahaman tentang gaya akan
										membantu kita untuk memahami berbagai peristiwa yang terjadi
										di sekitar kita.
									</>
								)}
							</div>
						)}
					</div>
				</div>
				<div className='bg-stone-100 rounded-l-3xl w-96'></div>
			</div>
			<div className='mt-12 mx-auto space-y-4 max-w-80'>
				<button
					type='submit'
					onClick={handleSubmit}
					className='uppercase border-2 border-black rounded-xl py-4 shadow-lg bg-[#BBFF29] w-80'
				>
					<p className='text-center font-bold'>sederhanakan?</p>
				</button>
				<div className='flex space-x-2'>
					<div className='rounded-lg bg-[#BBFF29] shadow-md w-10 h-10 border-2 border-black'>
						<p className='font-semibold text-center'>{"<"}</p>
					</div>
					<div className='rounded-lg bg-[#011627] shadow-md w-10 h-10'>
						<p className='text-white font-semibold text-center'>1</p>
					</div>
					<div className='rounded-lg bg-[#DED6D6] shadow-md w-10 h-10'>
						<p className='font-semibold text-center'>2</p>
					</div>
					<div className='rounded-lg bg-[#DED6D6] shadow-md w-10 h-10'>
						<p className='font-semibold text-center'>3</p>
					</div>
					<div className='rounded-lg bg-[#DED6D6] shadow-md w-10 h-10'>
						<p className='font-semibold text-center'>4</p>
					</div>
					<div className='rounded-lg bg-[#DED6D6] shadow-md w-10 h-10'>
						<p className='font-semibold text-center'>5</p>
					</div>
					<div className='rounded-lg bg-[#BBFF29] shadow-md w-10 h-10 border-2 border-black'>
						<p className='font-semibold text-center'>{">"}</p>
					</div>
				</div>
			</div>
		</>
	);
}

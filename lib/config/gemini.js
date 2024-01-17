import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_APIKEY);

async function regenerateMaterial(keywords, material, level) {
	const level_list = {
		1: "materi disusun sesederhana mungkin, tidak ada kata-kata yang rumit dan sangat mudah dipahami oleh anak-anak, singkatnya materi mudah",
		2: "materi disusun dengan kata-kata yang relatif mudah dipahami, dan materi disusun dengan bahasa yang lebih formal, singkatnya materi normal pada umunya",
		3: "materi disusun dengan lebih kompleks dengan bahasa yang lebih formal, materi lebih panjang dan luas, singkatnya materi lebih kompleks",
	};
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const prompt = `buatlah materi pembelajaran dengan format json dengan judul dan materi, judul harus menarik bisa dalam bentuk kalimat tanya, materi harus dalam paragraf bukan point bentuk materi sebagai array untuk menandai paragraf baru, dengan tema materi ${material} dan kata kunci ${keywords}. Materi harus disusun dengan level ${level} ${level_list[level]} dan bahasa santai. Contoh format json: '{"judul": "", "materi": []}'. 1 paragraf minimal terdiri dari 4 kalimat panjang dan minimal paragraf 4 adalah maksimal paragraf adalah 6. Dalam suatu materi harus terdapat kata penting yang relevan dengan materi, dan kata tersebut harus dikurung atau dibalut menggunakan elemen HTML bold <b>contoh kata</b> agar terlihat bold. Generate tanpa backtick`;

	const response = await model.generateContent(prompt);

	return response.response.text();
}

async function generateQuiz(quantiy, keywords, material, level) {
	const level_list = {
		1: "materi disusun sesederhana mungkin, tidak ada kata-kata yang rumit dan sangat mudah dipahami oleh anak-anak, singkatnya materi mudah",
		2: "materi disusun dengan kata-kata yang relatif mudah dipahami, dan materi disusun dengan bahasa yang lebih formal, singkatnya materi normal pada umunya",
		3: "materi disusun dengan lebih kompleks dengan bahasa yang lebih formal, materi lebih panjang dan luas, singkatnya materi lebih kompleks",
	};
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const prompt = `buatlah ${quantiy} soal pilihan ganda dengan format json dengan soal dan jawaban, soal harus menarik bisa dalam bentuk kalimat tanya, jawaban harus dalam bentuk array, dengan tema soal ${material} dan kata kunci ${keywords}. Soal harus disusun dengan level ${level} ${level_list[level]} dan bahasa santai. Contoh format json: '{"judul": "", "soal": "", "jawaban": []}'. 1 soal minimal terdiri dari 4 kalimat panjang. Generate tanpa backtick`;

	const response = await model.generateContent(prompt);

	return response.response.text();
}
export { generateQuiz, regenerateMaterial };

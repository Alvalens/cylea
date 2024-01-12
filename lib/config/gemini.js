import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_APIKEY);

async function testGemini(prompt) {
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const response = await model.generateContent(prompt);

	return response.response.text();
}

async function regenerateMaterial(keywords, material) {
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const prompt = `buatlah materi pembelajaran dengan format json dengan judul dan materi, judul harus menarik bisa dalam bentuk kalimat tanya, materi harus dalam paragraf bukan point bentuk materi sebagai array untuk menandai paragraf baru, dengan tema materi ${material} dan kata kunci ${keywords}. Contoh format json: '{"judul": "", "materi": []}'. 1 paragraf minimal terdiri dari 4 kalimat panjang dan minimal paragraf 4 adalah maksimal paragraf adalah 6. Dalam suatu materi harus terdapat kata penting yang relevan dengan materi, dan kata tersebut harus dikurung atau dibalut menggunakan elemen HTML bold <b>contoh kata</b> agar terlihat bold. Generate tanpa backtick`;

	const response = await model.generateContent(prompt);

	return response.response.text();
}


export { testGemini, regenerateMaterial };
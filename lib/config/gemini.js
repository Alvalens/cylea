import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_APIKEY);

async function regenerateMaterial(
	keywords,
	material,
	level = 2,
	subject,
	bab,
	quiz
) {
	const level_list = {
		1: "Sederhanakan materi sebanyak mungkin dengan menggunakan kalimat pendek dan jelas. Pastikan tidak ada istilah atau kata-kata sulit, dan tambahkan ilustrasi atau contoh aplikatif untuk mempermudah pemahaman anak-anak.",

		2: "Materi disusun dengan kata-kata yang lebih umum digunakan, namun tetap mempertahankan tingkat formalitas. Pastikan kalimat lebih terstruktur, dan berikan contoh yang relevan untuk mendukung pemahaman konsep secara normal pada umumnya.",

		3: "Tambahkan kompleksitas pada materi dengan menggunakan bahasa yang lebih formal. Perluas materi dengan memberikan lebih banyak detail dan pemikiran lebih mendalam. Pastikan setiap konsep dijelaskan secara menyeluruh, dan pertimbangkan memberikan contoh atau ilustrasi yang menantang namun mendukung tingkat pemahaman yang lebih kompleks.",
	};
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const prompt = `buatlah materi pembelajaran dengan format JSON dengan title dan content, judul harus menarik bisa dalam bentuk kalimat tanya, materi harus dalam paragraf bukan point bentuk materi sebagai array untuk menandai paragraf baru, dengan tema materi ${material} dan dengan kata kunci ${keywords}. Materi harus disusun dengan level ${level} ${level_list[level]} dan bahasa santai. Contoh format JSON: '{"title": "", "subject": "${subject}", "bab": "${bab}", level": ${level}, "content": []}'. Satu paragraf minimal HARUS terdiri dari 4 kalimat panjang dan minimal paragraf adalah 4 maksimal paragraf adalah 7. Dalam suatu materi harus terdapat kata penting yang relevan dengan materi, dan kata tersebut harus dikurung atau dibalut menggunakan elemen HTML bold <b>contoh kata</b> agar terlihat bold. Generate JSON tanpa backtick `;
	if (quiz) {
		const extra = `dan materi harus dapat menjawab soal ini ${quiz} beserta jawaban dan pembahasan. `;
		prompt.concat(extra);
	}
	const response = await model.generateContent(prompt);
	console.log(response.response.text());


	if (response.response.text().includes("JSON")) {
		throw new Error("Error generating material");
	}
	return response.response.text();
}

async function generateQuiz(quantiy, keywords, material, level) {
	const level_list = {
		1: "materi disusun sesederhana mungkin, tidak ada kata-kata yang rumit dan sangat mudah dipahami oleh anak-anak, singkatnya materi mudah",
		2: "materi disusun dengan kata-kata yang relatif mudah dipahami, dan materi disusun dengan bahasa yang lebih formal, singkatnya materi normal pada umunya",
		3: "materi disusun dengan lebih kompleks dengan bahasa yang lebih formal, materi lebih panjang dan luas, singkatnya materi lebih kompleks",
	};
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const prompt = `buatlah ${quantiy} soal pilihan ganda dengan format JSON dengan soal dan jawaban, soal harus menarik bisa dalam bentuk kalimat tanya, jawaban harus dalam bentuk array, dengan tema soal ${material} dan kata kunci ${keywords}. Soal harus disusun dengan level ${level} ${level_list[level]} dan bahasa santai. Contoh format JSON: '{"judul": "", "soal": "", "jawaban": []}'. 1 soal minimal terdiri dari 4 kalimat panjang. Generate tanpa backtick`;

	const response = await model.generateContent(prompt);

	return response.response.text();
}

async function regenerateQuiz(keywords, material, level, question, answer) {
	const level_list = {
		1: "materi disusun sesederhana mungkin, tidak ada kata-kata yang rumit dan sangat mudah dipahami oleh anak-anak, singkatnya materi mudah",
		2: "materi disusun dengan kata-kata yang relatif mudah dipahami, dan materi disusun dengan bahasa yang lebih formal, singkatnya materi normal pada umunya",
		3: "materi disusun dengan lebih kompleks dengan bahasa yang lebih formal, materi lebih panjang dan luas, singkatnya materi lebih kompleks",
	};

	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const prompt = `buatlah ulang soal pilihan ganda ini  ${question},  ${answer}   dengan format JSON dengan soal dan jawaban, soal harus menarik bisa dalam bentuk kalimat tanya, jawaban harus dalam bentuk array, dengan tema soal ${material} dan kata kunci ${keywords}. Soal harus disusun dengan level ${level} ${level_list[level]} dan bahasa santai. Contoh format JSON: '{"title": "string", "question": "string", "answers": [], "correct_answer": int (answers index)}'. 1 soal minimal terdiri dari 4 kalimat panjang. Generate tanpa backtick`;

	const response = await model.generateContent(prompt);

	return response.response.text();
}
export { regenerateQuiz, generateQuiz, regenerateMaterial };

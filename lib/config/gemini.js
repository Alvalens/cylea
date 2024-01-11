require("dotenv").config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_APIKEY);

async function testGemini(prompt) {
	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const response = await model.generateContent(prompt);

	return response.response.text();
}

export { testGemini };

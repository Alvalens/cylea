'use client'
import { testGemini } from "../../lib/config/gemini.js";
import { useState } from "react";

export default function Page() {
	const [prompt, setPrompt] = useState("");
	const [response, setResponse] = useState("");
	const [loading, setLoading] = useState(false);

	const handlePromptChange = (e) => {
		setPrompt(e.target.value);
	};

	const handlePromptSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const response = await testGemini(prompt);
		setResponse(response);
		setLoading(false);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<div>
				<title>Test</title>
				<link rel="icon" href="/favicon.ico" />
			</div>

			<main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
				<form onSubmit={handlePromptSubmit}>
					<label htmlFor="prompt">Prompt</label>
					<textarea
						id="prompt"
						className="border border-gray-400"
						value={prompt}
						onChange={handlePromptChange}
					/>
					<button type="submit">Submit</button>
				</form>
				{loading ? (
					<p>Loading...</p>
				) : (
					<div>
						<p>Response</p>
						<p>{response}</p>
					</div>
				)}
			</main>
		</div>
	);
}

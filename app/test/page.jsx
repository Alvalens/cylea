"use client";
import { regenerateMaterial } from "../../lib/config/gemini.js";
import { useEffect, useState } from "react";
import json from "json5";
import React from "react";

export default function Page() {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const keywords = ["pengertian gaya", "macam-macam gaya", "contoh gaya"];
	const material = "fisika kelas 10 SMA, gaya";

	// on click submit button
	const handleSubmit = async () => {
		setLoading(true);
		try {
			let response = await regenerateMaterial(keywords, material, 2);

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
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<div>
				<title>Test</title>
				<link rel="icon" href="/favicon.ico" />
			</div>

			<main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={handleSubmit}>
					generate
				</button>
				...
				{loading ? (
					<p>Loading...</p>
				) : (
					<div>
						<p>Material</p>
						{response && (
							<>
								{response.judul && <h1>{response.judul}</h1>}
								{response.materi &&
									response.materi.map((item, index) => (
										<p
											key={index}
											className="mb-3 justify-start text-justify"
											dangerouslySetInnerHTML={{
												__html: item,
											}}
										/>
									))}
							</>
						)}
					</div>
				)}
			</main>
		</div>
	);
}

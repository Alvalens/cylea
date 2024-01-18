# CYLEA: Choose Your Learning

Welcome to our cutting-edge Learning Platform, where learning is not just a journey but a personalized adventure! This project is a web-based learning platform built with Next.js, JavaScript, and Firebase, aiming to enhance the learning experience through personalized  leraning powered by Generative Gemini API.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## Features

* **Personalized Learning:** Utilize generative models to create personalized materials and quiz content based on user data.
* **Dynamic Quiz and Materials Generation:** Dynamically generate quizzes based on user preferences, history, and learning patterns.
* **User Authentication:** Allow users to create accounts, log in securely, and track their learning progress.

## Installation

1. Ensure you have [pnpm](https://pnpm.io/) installed. If not, you can install it using or just use npm/yarn:

   ```shell
   npm install -g pnpm
   ```
2. Clone the repository:

   ```shell
   git clone https://github.com/Alvalens/cylea.git
   ```
3. Navigate to the project directory:

   ```shell
   cd cylea
   ```
4. Install dependencies:

   ```shell
   pnpm install
   ```
5. Copy .env.example and rename as env.local. Then fill the env variable for [gemini api](https://makersuite.google.com/) and [firebase](https://firebase.google.com/), also dont forget to setup the project at firebase

   ```shell
   NEXT_PUBLIC_GEMINI_APIKEY=api-key
   NEXT_PUBLIC_FIREBASE_API_KEY=api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=app-id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=analytic-id
   ```
6. Start the development server

   ```javascript
   pnpm next dev
   ```

7. Access the Platform:
   ```shell
   Open your browser and navigate to `http://localhost:3000`.Start the development serve
    ```

## Contributor

1. Alvalen Shafelbilyunazra as **Hacker**
2. Ardha Ardhana Putra Agustavada as **Hacker**
3. Azarya Aditya Krisna Moeljono as **Hustler**
4. Burhanudin Yusuf Abdullah Ar Ramadhan as **Hipster**

**Team Name:** Cytane *(Chose Your Team Name)*

## Expressing Thanks

Our sincere thanks to Google and the Google Developer Student Club for their invaluable support through events like Hackfest. They've created a platform for developers to enhance their skills and bring innovation to life.

Feel free to join us on this educational journey by contributing, opening issues, or reaching out for collaborative endeavors!

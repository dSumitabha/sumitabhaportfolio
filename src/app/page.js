import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 font-serif">
      <Image
        src="https://avatars.githubusercontent.com/u/150615915?v=4"
        alt="Sumitabha Dandapat"
        width={120}
        height={120}
        className="rounded-full shadow-md border-4 border-white"
      />
      <h1 className="text-3xl font-bold mt-4">Sumitabha Dandapat</h1>
      <p className="text-lg text-gray-700 my-4  max-w-3xl">
        I am a passionate Web Developer skilled in React, Next.js, JavaScript, and Laravel. I have experience building scalable and efficient applications, focusing on both frontend and backend technologies. My expertise includes working with Tailwind CSS, integrating AI solutions, and optimizing web performance. Below are some of my notable projects:
      </p>
      <ul className="text-lg text-gray-700 mt-2 text-left max-w-3xl list-disc pl-5">
        <li><strong>AI-Powered Twitter-Style Feed:</strong> Built using Next.js and Gemini Flash LLM, implementing dynamic post generation and lazy loading.</li>
        <li><strong>Multi-Vendor eCommerce Platform:</strong> Developed with Laravel and MySQL, featuring a responsive frontend with Tailwind CSS.</li>
        <li><strong>Real Estate Application:</strong> Created with React and Next.js, leveraging modern UI/UX principles and multi-page navigation.</li>
        <li><strong>eCommerce Platform:</strong> Built using Laravel and MySQL, focusing on seamless product management, user authentication, and order processing.</li>
      </ul>
      <div className="mt-4 flex gap-4">
        <a href="https://github.com/dSumitabha" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/sdandapat" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
      </div>
      <a href="/github" className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700">Cactro Github Assignment</a>
    </div>
  );
}

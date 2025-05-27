import Image from "next/image";

const Introduction = () => {
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-950 p-6 font-serif overflow-hidden">
            <Image
            src="https://avatars.githubusercontent.com/u/150615915?v=4"
            alt="Sumitabha Dandapat"
            width={120}
            height={120}
            className="rounded-full shadow-md border-4 border-white relative before:absolute -before:left-20 before:top-32 before:w-4 before:h-screen before:bg-gray-200 dark:before:bg-gray-800"
            />
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mt-4 mb-8 relative text-center text-gray-800 dark:text-slate-200
            before:absolute before:-top-4 before:left-1/2 before:w-screen before:h-px before:bg-gray-200 dark:before:bg-gray-800 before:-translate-x-1/2
            after:absolute after:-bottom-4 after:left-1/2 after:w-screen after:h-px after:bg-gray-200 dark:after:bg-gray-800 after:-translate-x-1/2
            ">
            Sumitabha Dandapat
            </h1>
            <div className="relative before:absolute before:top-0 before:-left-4 before:w-px before:h-[200vh] before:bg-gray-200 dark:before:bg-gray-800 before:-translate-y-1/2 after:absolute after:top-0 after:-right-4 after:w-px after:h-[200vh] after:bg-gray-200 dark:after:bg-gray-800 after:-translate-y-1/2">
                <p className="text-lg text-gray-700 dark:text-gray-300 my-4  max-w-3xl">I am a passionate Web Developer skilled in React, Next.js, JavaScript, and Laravel. I have experience building scalable and efficient applications, focusing on both frontend and backend technologies. My expertise includes working with Tailwind CSS, integrating AI solutions, and optimizing web performance. Below are some of my notable projects:</p>
                <ul className="text-lg text-gray-700 dark:text-gray-300 mt-2 text-left max-w-3xl list-disc pl-5">
                    <li><strong>AI-Powered Twitter-Style Feed:</strong> Built using Next.js and Gemini Flash LLM, implementing dynamic post generation and lazy loading.</li>
                    <li><strong>Multi-Vendor eCommerce Platform:</strong> Developed with Laravel and MySQL, featuring a responsive frontend with Tailwind CSS.</li>
                    <li><strong>Real Estate Application:</strong> Created with React and Next.js, leveraging modern UI/UX principles and multi-page navigation.</li>
                    <li><strong>eCommerce Platform:</strong> Built using Laravel and MySQL, focusing on seamless product management, user authentication, and order processing.</li>
                </ul>
                <div className="mt-4 flex justify-center gap-4 text-center">
                    <a href="https://github.com/dSumitabha" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
                    <a href="https://linkedin.com/in/sdandapat" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
                </div>
            </div>
            
        </div>
    )
}

export default Introduction;
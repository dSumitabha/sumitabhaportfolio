const SkillsGrid = () => {
    return (
        <>
            <section className="py-12 px-4 bg-gray-100 dark:bg-slate-950 overflow-hidden border-t border-gray-800" id="pandavas">
                <div className=" grid grid-cols-8">
                    <div className="col-span-8 lg:col-span-1"></div>
                    <div className="grid col-span-8 lg:col-span-6 grid-cols-3 grid-rows-3 gap-4">
                        <div className="relative col-span-3 md:col-span-2 row-span-1 md:row-span-2 bg-sky-200 aspect-square bg-cover bg-no-repeat group " style={{backgroundImage: "url('/techStacks/next.png')"}}>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div> 
                            <div className="absolute inset-0 backdrop-blur-sm opacity-100 md:opacity-0 overflow-hidden md:group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">NextJS</h2>
                                <h3 className="text-lg text-orange-50">Fullstack React Framework</h3>
                                <p className="text-sm text-center w-[95%] md:w-3/4 mx-auto">Next.js powers both the UI and APIs of my Quitter app — a solo project that deepened my fullstack skills. Building Quitter from scratch with Next.js gave me hands-on experience with dynamic routing, API routes, and SSR. It connected frontend and backend seamlessly, and helped me truly understand the power of a fullstack React framework in real-world apps.</p>
                                <p className="text-sm text-center w-3/4 mx-auto hidden md:block">Beyond Quitter, I also built SkyDrive, a cloud storage web app inspired by Google Drive, entirely with Next.js. This project challenged me to implement features like file uploads, user authentication, and folder structures — all while maintaining performance and responsiveness. I used Next.js API routes to handle uploads and user sessions, and leveraged its file-based routing to structure the dashboard and file explorer. Building SkyDrive gave me practical experience scaling a feature-rich fullstack app, and deepened my appreciation for how Next.js simplifies complex architecture while keeping development fast and enjoyable.</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1 bg-sky-200 aspect-square bg-cover bg-no-repeat group bg-[url(/techStacks/react.png)]"  >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 overflow-hidden bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">ReactJS</h2>
                                <h3 className="text-lg text-orange-50">Frontend JavaScript Library</h3>
                                <p className="text-sm text-center">I use React to build the frontend of nearly all my projects today. Its component-based architecture lets me create dynamic, interactive interfaces with ease. In Quitter, React powered the entire user experience — from real-time UI updates to reusable components. It continues to be my go-to tool for crafting maintainable and scalable frontend apps.</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group bg-[url(/techStacks/laravel.png)]" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 overflow-hidden bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">Laravel</h2>
                                <h3 className="text-lg text-orange-50">PHP Web Application Framework</h3>
                                <p className="text-sm text-center">I developed a multivendor eCommerce app using Laravel, handling user, admin, and seller roles with robust authentication and middleware. I built backend systems for order processing and product management, leveraging Laravel’s powerful MVC architecture to create a secure and scalable application.</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group bg-[url(/techStacks/javascript.png)]" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 overflow-hidden bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">Javascript</h2>
                                <h3 className="text-lg text-orange-50">Frontend Scripting Language</h3>
                                <p className="text-sm text-center">JavaScript is the foundation of my frontend skills. I’ve built apps like a weather API dashboard and a school management system to master advanced DOM manipulation. In my eCommerce projects, JavaScript handles user interactions smoothly, making the frontend dynamic and responsive to user actions.</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group bg-[url(/techStacks/tailwindcss.png)]" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 overflow-hidden bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">Tailwind</h2>
                                <h3 className="text-lg text-orange-50">Utility-First CSS Framework</h3>
                                <p className="text-sm text-center">I use Tailwind CSS in all my projects to build clean and responsive UIs efficiently. Its utility classes help me move fast without leaving the component structure. With my background in vanilla CSS, Tailwind feels natural and productive. It keeps styling readable, avoids context-switching, and fits perfectly into modern, component-based development.</p>
                            </div>
                        </div>
                        
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group bg-[url(/techStacks/mongoDB.png)]" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 overflow-hidden bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">MongoDB | Mongoose</h2>
                                <h3 className="text-lg text-orange-50">NoSQL Document Database</h3>
                                <p className="text-sm text-center">I’ve used MongoDB as the primary database in both Quitter and SkyDrive to store flexible, schema-less data for users, posts, and files. Its document structure fits naturally with JavaScript and works seamlessly with modern backend frameworks. MongoDB’s flexibility and speed made it ideal for building scalable, real-world features across both of my projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-8 lg:col-span-1"></div>
                </div>
                
            </section>        
        </>
    )
}

export default SkillsGrid;
const SkillsGrid = () => {
    return (
        <>
            <section className="my-4 p-4" id="pandavas">
                <div className=" grid grid-cols-8">
                    <div className="col-span-8 lg:col-span-1"></div>
                    <div className="grid col-span-8 lg:col-span-6 grid-cols-3 grid-rows-3 gap-4">
                        <div className="relative col-span-3 md:col-span-2 row-span-1 md:row-span-2 bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden" style={{backgroundImage: "url('/techStacks/next.png')"}}>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div> 
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">NextJS as Head</h2>
                                <h3 className="text-lg text-orange-50">NextJS as h3</h3>
                                <p className="text-sm text-center w-[95%] md:w-3/4 mx-auto">Next JS</p>
                                <p className="text-sm text-center w-3/4 mx-auto hidden md:block">Next JS is a javascript framework.</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden bg-[url(/techStacks/react.png)]"  >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">ReactJS</h2>
                                <h3 className="text-lg text-orange-50">ReactJS</h3>
                                <p className="text-sm text-center">ReactJs is javascript library for frontend development.</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden bg-[url(/techStacks/laravel.png)]" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">Laravel</h2>
                                <h3 className="text-lg text-orange-50">Laravel</h3>
                                <p className="text-sm text-center">Laravel is a full stack framework.</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">Javascript</h2>
                                <h3 className="text-lg text-orange-50">Vanilla Javascript</h3>
                                <p className="text-sm text-center">Javascript is the only scripting language for browser.</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden bg-[url(/techStacks/tailwindcss.png)]" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">Tailwind</h2>
                                <h3 className="text-lg text-orange-50">Tailwind CSS</h3>
                                <p className="text-sm text-center">Tailwind is a utility-first CSS framework</p>
                            </div>
                        </div>
                        
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden bg-[url(/techStacks/mongoDB.png)]" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold">MongoDB</h2>
                                <h3 className="text-lg text-orange-50">Mongoose</h3>
                                <p className="text-sm text-center">MongoDB is a nosql database.</p>
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
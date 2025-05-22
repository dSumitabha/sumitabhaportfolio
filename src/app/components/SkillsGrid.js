const SkillsGrid = () => {
    return (
        <>
            <section className="my-4 p-4" id="pandavas">
                <div className="grid grid-cols-8">
                    <div className="col-span-8 lg:col-span-1"></div>
                    <div className="grid col-span-8 lg:col-span-6 grid-cols-3 grid-rows-3 gap-4">
                        <div className="relative col-span-3 md:col-span-2 row-span-1 md:row-span-2 bg-sky-200 aspect-square bg-cover bg-no-repeat group" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div> 
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold"></h2>
                                <h3 className="text-lg text-orange-50"></h3>
                                <p className="text-sm text-center w-[95%] md:w-3/4 mx-auto">Demo Story 1</p>
                                <p className="text-sm text-center w-3/4 mx-auto hidden md:block">Demo Story 2</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold"></h2>
                                <h3 className="text-lg text-orange-50"></h3>
                                <p className="text-sm text-center">Demo Story</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold"></h2>
                                <h3 className="text-lg text-orange-50"></h3>
                                <p className="text-sm text-center">Demo Story</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold"></h2>
                                <h3 className="text-lg text-orange-50"></h3>
                                <p className="text-sm text-center">Demo Story</p>
                            </div>
                        </div>
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold"></h2>
                                <h3 className="text-lg text-orange-50"></h3>
                                <p className="text-sm text-center">Demo Story</p>
                            </div>
                        </div>
                        
                        <div className="relative col-span-3 md:col-span-1 row-span-1  bg-sky-200 aspect-square bg-cover bg-no-repeat group overflow-hidden" >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 bg-white/10 rounded-lg p-4 text-white flex flex-col justify-center items-center gap-2 transition-all duration-300">
                                <h2 className="text-xl font-semibold"></h2>
                                <h3 className="text-lg text-orange-50"></h3>
                                <p className="text-sm text-center">Demo Story</p>
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
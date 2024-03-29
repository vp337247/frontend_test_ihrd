function Details({ setOpenModal, movie }) {
    return (
        <>
            {/* Background overlay */}
            <div className='bg-black/80 w-[300vw] z-10 h-[100vh] fixed top-0 left-0' onClick={() => setOpenModal(false)} />
            
            {/* Movie details */}
            <div>
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title} />
            </div>
            
            {/* Modal content */}
            <div className='absolute w-full flex justify-center items-center z-30 '>
                <div className="bg-black/80 p-6 rounded-lg md:w-[70%] lg:w-[60%]">
                    <div>
                        <div className='text-white font-bold text-3xl'>
                            {movie.original_title}
                        </div>
                        <div className="flex gap-4 mt-3">
                            {/* Movie details */}
                            <div>
                                <div>{movie.original_language.toUpperCase()}</div>
                                <div>{movie.origin_country}</div>
                                <div className='text-white/40 w-[400px]'>{movie.overview}</div>
                            </div>
                            <div>
                                <img width='250' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title} />
                            </div>
                        </div>
                        {/* Close button */}
                        <button className="bg-red-400 p-2 rounded-lg text-center" onClick={() => setOpenModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Details;

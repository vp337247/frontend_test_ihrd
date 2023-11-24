import { createRef, useRef, useState, useEffect } from "react";
import Details from "./Details";

function MovieGrid({ results }) {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState({});

  const showDetails = (index) => {
    setMovie(results[index]);
    setIsOpen(true);
  };

  // Use useEffect to add/remove Tailwind classes to the body when the modal is opened/closed
  useEffect(() => {
    // Add Tailwind classes to the body when the modal is open
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove Tailwind classes when the modal is closed
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup: Remove the classes when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {results.length > 0 ? (
        results.map(
          ({ id, poster_path, original_title, release_date, overview }, index) => (
            <div
              className="bg-gray-600 p-2 rounded-lg movie-item transform hover:scale-105 transition-transform duration-300 ease-in-out"
              key={id}
            >
              <img
                src={"https://image.tmdb.org/t/p/w500" + poster_path}
                alt={original_title}
                className="w-full"
              />
              <div className="font-bold text-white mt-2">{original_title}</div>
              <div className="text-gray-400 ">{release_date}</div>
              <div className="text-gray-400  h-6 overflow-ellipsis overflow-clip">
                {overview}
              </div>
              <button
                className="bg-green-400 hover:bg-green-700 p-2 rounded-lg text-center mt-2 w-full font-bold"
                onClick={() => showDetails(index)}
              >
                Details
              </button>
            </div>
          )
        )
      ) : (
        <>
          <div>No result found</div>
        </>
      )}
      {isOpen && <Details setOpenModal={setIsOpen} movie={movie} />}
    </div>
  );
}

export default MovieGrid;

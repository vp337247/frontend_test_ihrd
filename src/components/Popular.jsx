import { useEffect, useState } from 'react';
import MovieGrid from './MovieGrid';


function Popular() {

    const REACT_APP_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

    const [popular, setPopular] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const fetchPopular = () => {



        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`
        )
            .then(res => res.json())
            .then(res => {
                setPopular(res.results ?? [])
                setLoaded(true)

            });
    }

    useEffect(() => {
        fetchPopular()
    }, []);

    return (<section>
        {loaded ? <MovieGrid results={popular} />
            : <div className="loading">Loading...</div>
        }

    </section>);
}

export default Popular;
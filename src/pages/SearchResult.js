import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header";
import Loader from '../components/Loader';

const SearchResult = () => {
    const [searchParams] = useSearchParams()
    const [Loading, setLoading] = useState(true)

    if (Loading) {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1 className="title mb-3">Resultados:</h1>
                    <p>
                        {searchParams.get('query')}
                    </p>
                    <Loader />
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1 className="title mb-3">Resultados:</h1>
                    <p>
                        {searchParams.get('query')}
                    </p>
                </div>
            </div>
        )
    }
}

export default SearchResult;
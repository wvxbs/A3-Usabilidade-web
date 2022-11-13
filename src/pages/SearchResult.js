import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header";

const SearchResult = () => {
    const [searchParams] = useSearchParams()

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

export default SearchResult;
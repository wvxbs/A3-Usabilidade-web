import { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Card from '../components/Card'
import Header from "../components/Header"
import Loader from '../components/Loader'
import MissingData from '../components/MissingData'

const SearchResult = () => {
    const [searchParams] = useSearchParams()
    const [Query, setQuery] = useState("")
    const [CardData, setCardData] = useState(undefined)
    const [DataIsMissing, setDataIsMissing] = useState(true)
    const [SearchResultStatus, setSearchResultStatus] = useState(false)
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
      FetchPersons()
      setQuery(searchParams.get('query'))
    }, [])

    const FetchPersons = () => {
      fetch(process.env.REACT_APP_API_URL + "/person", {
        method: 'GET',
        redirect: 'follow'
      })
      .then(res => res.json())
      .then(result => {
        if(ValidateCardData(result)) {
          setCardData(FilterData(result))
          setDataIsMissing(false)
        }
        setLoading(false)
      })
      .catch(error => {
        alert(error)
        setLoading(false)
      }) 
    }

    const ValidateCardData = (res) => {
      if(res === []) return false
      if(res === undefined) return false

      return true
    }

    const FilterData = result => {
      let FilteredData = []

      result.map(e => {
        if(e.name.includes(Query))
          FilteredData.push(e)
      })

      return FilteredData
    }

    const RenderCards = () => { 
      return (
        CardData.map(e => (
          <div className="col-md">
            <Card   
              key={e._id}
              id={e._id}
              img={e.img}
              name={e.name}
              link={e.link}
              summary={e.summary}
            />
        </div>
        ))
      )
    }

    const VerifyIfDataIsMissing = () => {
      if (DataIsMissing) 
        return <MissingData title="Nenhuma resultado encontrado"/>
      
      return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {RenderCards()}
        </div>
      )
  } 
    
  if(Loading) {
    return (
      <div className="App">
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
      <div className="App">
        <Header />
        <div className="container">
        <h1 className="title mb-3">Resultados:</h1>
        <p>
          {searchParams.get('query')}
        </p>
          {VerifyIfDataIsMissing()} 
        </div>
      </div>
    )
  }
}

export default SearchResult
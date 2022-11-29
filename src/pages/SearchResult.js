import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'
import Card from "../components/Card"
import Header from "../components/Header"
import Loader from "../components/Loader"
import MissingData from "../components/MissingData"

const SearchResult = () => { 

    const [searchParams] = useSearchParams()
    const [Query, setQuery] = useState(searchParams.get('query').toLowerCase())
    const [CardData, setCardData] = useState([])
    const [DataIsMissing, setDataIsMissing] = useState(true)
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
      FetchPersons()
    }, [])

    const FetchPersons = () => {
      fetch(`${process.env.REACT_APP_API_URL}/person/`, {
        method: 'GET',
        redirect: 'follow'
      })
      .then(res => res.json())
      .then(result => {
        if(ValidateCardData(result)) {
          FilterCardData(result)
          setDataIsMissing(false)
        }
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
      }) 
    }

    const RenderCards = () => { 
      return (
        CardData.map(e => (
          <div className="col-md">
            <Card data={e} />
        </div>
        ))
      )
    }

    const ValidateCardData = (res) => {
      if(res === []) return false
      if(res === undefined) return false

      return true
    }

    const FilterCardData = (res) => {
      let cardData = []

      res.map(e => {
        if(e.name.toLowerCase().includes(Query)) {
          cardData.push(e)
        }
      })

      setCardData(cardData)
    }

    const VerifyIfDataIsMissing = () => {
      if (DataIsMissing) 
        return <MissingData title="Nenhuma pessoa encontrada"/>

      if (CardData.length === 0) 
        return <MissingData title="Nenhuma pessoa encontrada"/>

      else {
      return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {RenderCards()}
        </div>
      )
    }
  } 
    
  if(Loading) {
    return (
      <div className="App">
      <Header />
      <div className="container">
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
          <h1 className="title mb-3">Cancelados:</h1>
          {Query}
          {VerifyIfDataIsMissing()} 
        </div>
      </div>
    )
  }
}
  
export default SearchResult
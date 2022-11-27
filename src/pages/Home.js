import { useEffect, useState } from "react"
import Card from "../components/Card"
import Header from "../components/Header"
import Loader from "../components/Loader"
import MissingData from "../components/MissingData"

const Home = () => { 

    const [CardData, setCardData] = useState(undefined)
    const [DataIsMissing, setDataIsMissing] = useState(true)
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
      FetchPersons()
    }, [])

    const FetchPersons = () => {
      fetch(process.env.REACT_APP_API_URL + "/person", {
        method: 'GET',
        redirect: 'follow'
      })
      .then(res => res.json())
      .then(result => {
        if(ValidateCardData(result)) {
          setCardData(result)
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

    const RenderCards = () => { 
      return (
        CardData.map(e => (
          <div className="col-md">
            <Card   
              id={e._id}
              img={e.img}
              name={e.name}
              age={e.age}
              link={e.link}
              summary={e.summary}
            />
        </div>
        ))
      )
    }

    const VerifyIfDataIsMissing = () => {
      if (DataIsMissing) 
        return <MissingData title="Nenhuma pessoa cadastrada"/>
      
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
          {VerifyIfDataIsMissing()} 
        </div>
      </div>
    )
  }
}
  
export default Home

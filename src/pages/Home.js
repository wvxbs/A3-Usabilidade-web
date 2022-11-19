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
    })

    const FetchPersons = () => {
      fetch(process.env.REACT_APP_API_URL, {
        method: 'GET',
        redirect: 'follow'
      })
      .then(res => {
        setCardData(res.json())
      })
      .then(result => console.log(result                                                                                                                                                                                                                                            ))
      .catch(error => {
        setDataIsMissing(true)
      })  
      setDataIsMissing(false)
    }

    const RenderCards = () => {
      let cardData = CardData 
      return (
      cardData.foreach(e => (
        <div className="col-md">
          <Card   
            img={e.img}
            name={e.name}
            summary={e.summary}
          />
      </div>))
      )
    }

    const VerifyIfDataIsMissing = () => {
      if (!DataIsMissing) 
        return (
          <div>
            <h1 className="title mb-3">Cancelados do mês:</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {RenderCards()}
            </div>
          </div>
        ) 
        else {
      return <MissingData title="Nenhuma pessoa cadastrada"/>
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
          {VerifyIfDataIsMissing()} 
        </div>
      </div>
    )
  }
}
  
  export default Home

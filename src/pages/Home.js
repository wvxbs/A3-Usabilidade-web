import { useEffect, useState } from "react"
import Card from "../components/Card"
import Header from "../components/Header"
import MissingData from "../components/MissingData"

const Home = () => { 

    const [CardData, setCardData] = useState([{}])
    const [DataIsMissing, setDataIsMissing] = useState(true)

    useEffect(() => {
      FetchPersons()
    })

    const FetchPersons = () => {
      fetch("http://localhost:4040" + "/api/person/", {
        method: 'GET',
        crossDomain:true,
      })
      fetch("http://localhost:4040/api/person/", {
        method: 'GET',
        redirect: 'follow'
      })
      .then(res => {
        setCardData(res.json())
        setDataIsMissing(false)
      })
      .then(result => console.log(result))
      .catch(error => {
        console.log('error', error)
        setDataIsMissing(true)
      })  
    }

    const RenderCards = () => (
      CardData.map(e => (
        <div className="col-md">
          <Card   
            img={e.img}
            name={e.name}
            summary={e.summary}
          />
      </div>
      ))
    )

    return (
      <div className="App">
        <Header />
        <div className="container">
          {() => {
            if (DataIsMissing) 
            return <MissingData title="Nenhuma pessoa cadastrada"/>
        
            return (
              <div>
                <h1 className="title mb-3">Cancelados do mês:</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {RenderCards()}
                </div>
              </div>
            )
          }}
        </div>
      </div>
    )
  }
  
  export default Home

import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

function Home() {

    const [CardData, setCardData] = useState([{}])

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
          <h1 className="title mb-3">Cancelados do mês:</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {RenderCards()}            
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
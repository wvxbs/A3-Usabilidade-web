import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

function Home() {

    const [CardData, setCardData] = useState({})

    const RenderCards = () => {
      return (
        <div className="col-md">
          <Card   
            img={""}
            name={""}
            summary={""}
          />
        </div>
      )
    }

    return (
      <div className="App">
        <Header />
        <div className="container">
          <h1></h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {RenderCards()}
            {RenderCards()}
            {RenderCards()}
            {RenderCards()}
            {RenderCards()}
            {RenderCards()}
            {RenderCards()}
            
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
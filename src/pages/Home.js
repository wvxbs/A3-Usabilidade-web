import Header from "../components/Header";
import Form1 from "./home/Form1";
import Form2 from "./home/Form2";
import Form3 from "./home/Form3";

function Home() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <h1>Cadastro</h1>
          <div className="row">
          <Form1 />
          <Form2 />
          <Form3 />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
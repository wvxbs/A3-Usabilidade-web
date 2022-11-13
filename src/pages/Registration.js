import Header from "../components/Header";
import Form from "./registration/Form";

function Registration() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <h1 className="title mb-3">Cadastro</h1>
          <div className="row">
          <Form />
          </div>
        </div>
      </div>
    );
  }
  
  export default Registration;
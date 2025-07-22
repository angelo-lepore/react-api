import { useState, useEffect } from "react";
import "./index.css";

// Importa gli stili di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const url = "https://lanciweb.github.io/demo/api/actresses/";
  const [apiUrl, setApiUrl] = useState(url);
  const [charactersData, setcharactersData] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcharactersData(data);
      });
  }, [apiUrl]);

  return (
    <>
      <header>
        <h1 className="text-center p-2">Actresses</h1>
      </header>
      <main>
        <div className="container text-center mt-5">
          <div className="row g-3">
            {charactersData?.map((element, index) => {
              return (
                <div key={index} className="col-md-4">
                  <img
                    src={element.image}
                    alt={element.name}
                    className="img-fixed"
                  />
                  <h2>{element.name}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

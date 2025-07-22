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
        <div className="container mt-5">
          <div className="row g-3">
            {charactersData?.map((element, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow">
                  <div className="card-body">
                    <figure>
                      <img
                        src={element.image}
                        alt=""
                        className="card-img-top"
                      />
                    </figure>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{element.name}</h5>
                    <p>
                      <span className="fw-semibold">Anno di nascita:</span>{" "}
                      {element.birth_year}
                    </p>
                    <p>
                      <span className="fw-semibold">Nazionalità:</span>{" "}
                      {element.nationality}
                    </p>
                    <p>
                      <span className="fw-semibold">Biografia:</span>{" "}
                      {element.biography}
                    </p>
                    <p>
                      <span className="fw-semibold">Riconoscimenti:</span>{" "}
                      {element.awards}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

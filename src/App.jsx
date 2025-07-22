import { useState, useEffect } from "react";
import "./index.css";

// Importa gli stili di Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const urlActresses = "https://lanciweb.github.io/demo/api/actresses/";
  const [apiUrlActresses, setapiUrlActresses] = useState(urlActresses);
  const [actresses, setActresses] = useState(null);
  const urlActors = "https://lanciweb.github.io/demo/api/actors/";
  const [apiUrlActors, setapiUrlActors] = useState(urlActors);
  const [actors, setActors] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(apiUrlActresses).then((res) => res.json()),
      fetch(apiUrlActors).then((res) => res.json()),
    ]).then(([actressData, actorData]) => {
      console.log("Attrici:", actressData);
      console.log("Attori:", actorData);
      setActresses(actressData);
      setActors(actorData);
    });
  }, []);

  return (
    <>
      <main>
        <div>
          <h1 className="text-center p-2">Actresses</h1>
        </div>
        <div className="container mt-5">
          <div className="row g-3">
            {actresses?.map((element, index) => (
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
        <div>
          <h1 className="text-center p-2">Actors</h1>
        </div>
        <div className="container mt-5">
          <div className="row g-3">
            {actors?.map((element, index) => (
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

import React, { useContext } from "react";
// Data
import AppContext from "../context/AppContext";
// Styles
import "../styles/Portfolio.css";
// Containers
import Gallery from "../containers/Gallery";

const Portfolio = () => {
  const { state } = useContext(AppContext);
  console.log(state);

  return (
    <>
      <section>
        <h2>Mi Portfolio</h2>
        <div className="card-experience__container">
          {state.portfolio.companiesDescription.map((companyDescription) => (
            <div
              key={companyDescription.id}
              className="card-experience__description-container"
            >
              <h2>{companyDescription.company}</h2>
              <picture>
                <img src={companyDescription.image} alt="" />
              </picture>
              <div className="description__container">
                <h3>
                  {companyDescription.profesion} / {companyDescription.work}
                </h3>
                <p>{companyDescription.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Gallery />
    </>
  );
};

export default Portfolio;

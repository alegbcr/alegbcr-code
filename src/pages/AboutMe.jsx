import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
// Data
import AppContext from "../context/AppContext";
// Styles
import "../styles/AboutMe.css";

const AboutMe = () => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(state);

  // functions
  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <main className="main__container">
        <picture className="image-home__container">
          <img className="image-background" src={state.intro.picture} alt="" />
        </picture>
        <div className="overlay__container--home">
          <div className="description-home__container">
            <h2 className="title-home--first">Hola,</h2>
            <h1 className="title-home--second">soy Alex</h1>
            <p className="paragraph-home">
              Soy un apasionado por el arte digitalcon una gran motivación en la
              tecnología.
            </p>
            <p className="paragraph-home">
              Incursionando en el mundo del Frontend y el Blockchain.
            </p>
            <ul className="flex icons-social-media__container">
              {state.info.socialMedia.map((item) => (
                <li key={item.id} className="icon-social-media--item">
                  <a
                    className="social-media"
                    target="blank"
                    href={item.reference}
                  >
                    {item.iconName}
                  </a>
                </li>
              ))}
            </ul>
            <div className="button-home__container">
              <Button
                buttonAction={handleContact}
                classNames="button-home"
                text="Contacto"
              />
            </div>
          </div>
          <small className="phrase">Never Give UP!</small>
        </div>
      </main>
    </>
  );
};

export default AboutMe;

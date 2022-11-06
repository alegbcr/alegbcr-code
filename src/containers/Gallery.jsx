import React, { useContext } from "react";
// Data
import AppContext from "../context/AppContext";
// Styles
import "../styles/Gallery.css";

const Gallery = () => {
  const { state } = useContext(AppContext);

  return (
    <section className="grid md:grid-cols-12 gallery__container">
      <h3 className="text-lg font-semibold md:col-start-4 md:col-span-6">
        Algunos de mis trabajos
      </h3>
      <div className="flex flex-wrap justify-center items-center sm:w-full md:w-4/5 gallery__container--logos">
        {state.gallery.logos.map((logo) => (
          <picture
            key={logo.id}
            className="gallery__logo flex justify-center items-center"
          >
            <img src={logo.image} alt="" />
          </picture>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

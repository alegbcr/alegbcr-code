import React, { useState } from "react";
// Google Drive Display Images
/* You need to copy the ID from the original URL (the characters between the /d/ and /view), and use it in this URL: */
const googleDrivePhotosURL = "https://drive.google.com/uc?export=view&id=";
// Icons
import { FaLinkedinIn, FaInstagram, FaTelegramPlane } from "react-icons/fa";

// images
// Logo Branding
import logo from "../assets/home/logo_white.png";
// Home
import me from "../assets/home/me.png";
// Logos
import diamond from "../assets/gallery/diamond_property.png";
import dogzilla from "../assets/gallery/dogzilla.png";
import gallo_loco from "../assets/gallery/gallo_loco.png";
import iclean from "../assets/gallery/i-clean.png";
import jam from "../assets/gallery/jam.png";
import limon_vibes from "../assets/gallery/limon_vibes.png";
import meentes_creativas from "../assets/gallery/meentes_creativas.png";
import mind_world from "../assets/gallery/mind_world.png";
// Digital Arts
import art1 from "../assets/gallery/01.png";
import art2 from "../assets/gallery/02.png";
import art3 from "../assets/gallery/03.png";
import art4 from "../assets/gallery/04.png";
import art5 from "../assets/gallery/05.png";
import art6 from "../assets/gallery/06.png";
import art7 from "../assets/gallery/07.png";
import art8 from "../assets/gallery/08.png";
import art9 from "../assets/gallery/09.png";
import art10 from "../assets/gallery/10.png";
import art11 from "../assets/gallery/11.png";

const initialState = {
  // Header
  info: {
    // logo: `${googleDrivePhotosURL}1T64qAXwf-Fxshijobw0esDiL9YflJOxX`,
    logo: logo,
    logoMenu: "",
    categories: [
      {
        id: 1,
        name: "Portfolio",
        path: "/",
      },
      {
        id: 2,
        name: "Sobre mí",
        path: "/about-me",
      },
      {
        id: 3,
        name: "Mis herramientas",
        path: "/my-tools",
      },
      {
        id: 4,
        name: "Contacto",
        path: "/contact",
      },
    ],
    socialMedia: [
      {
        id: 1,
        reference:
          "https://www.linkedin.com/in/alexander-gonz%C3%A1lez-blanco-56a474ba/",
        iconName: <FaLinkedinIn />,
      },
      {
        id: 2,
        reference: "https://www.instagram.com/alegbcr/",
        iconName: <FaInstagram />,
      },
      {
        id: 3,
        reference: "https://t.me/algbcr",
        iconName: <FaTelegramPlane />,
      },
    ],
  },
  // Home`
  intro: {
    // name: "Alexander",
    name: "Un poco sobre mí",
    // lastName: "González",
    profesion: "¿Tienes una idea?",
    description:
      "Las ideas son la base para empezar a crear proyectos que puedan cambiar el mundo.",
    // picture: `${googleDrivePhotosURL}1XgFgGRA8yPZIF_Uy7qHFD8KYBcEABBfZ`,
    picture: me,
    detail: "imagen de Alexander",
  },
  about: {
    firstParagraph:
      "Hola soy Alex, un diseñador gráfico que ha estado trabajando de forma freelance con diferentes empresas en Costa Rica.",
    secondParagraph:
      "He pasado los últimos 5 años o más trabajando en diferentes áreas de diseño digital, creación y actualizaciones de identidad de marca y asesorando a mis clientes en las mejores prácticas para el marketing digital.",
    thridParagraph:
      "Además, he estado desarrollando las habilidades como un Full Stack Developer de Javascript y explorando la Web 3 para crear aplicación en Blockchain y aportar valor en ese ecosistema tan apasionante.",
    fourthParagraph:
      "Fuera de mi entorno de trabajo me concontrarás leyendo, disfrutando de un buen café y principalmente disfrutando de mi tiempo libre en compañía de mi hijo.",
    fifthParagraph:
      "Además, siento una gran atracción por los mercados financieros y también todo el ecosistema de criptoactivos.",
    sixthParagraph:
      "Creo que la posibilidad de estar constantemente aprendiendo diferentes habilidades y formas de pensar son la riqueza que podremos heredar a nuestras nuevas generaciones en un mundo tan cambiante como es el actual.",
    logo: `${googleDrivePhotosURL}1u6R4OHQqA_JWtjV-wsuYQUh_VIZM-KW4`,
    books: [
      {
        id: 1,
        title: "The Business Blockchain",
        author: "William Mougayar",
        image:
          "https://m.media-amazon.com/images/P/B01EIGP8HG.01._SCLZZZZZZZ_SX500_.jpg",
      },
      {
        id: 2,
        title: "Psicología de las masas",
        author: "Gustave Le Bon",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51CDRFFBCDL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 3,
        title: "Designing for emotion",
        author: "Aarron Walter",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/31jmLLi9E1L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      },
      {
        id: 4,
        title: "DeFi and the Future of Finance",
        author: "Campbell R. Harvey, Ashwin Ramachandran, Joey Santoro",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41dKXZi614L._SX339_BO1,204,203,200_.jpg",
      },
    ],
  },
  experienceTimeline: {
    titleExperience: "Un pequeño recorrido",
    companies: [
      {
        name: "Mind World",
        description: "Diseñador | Desarrollador",
        years: 2021,
      },
      {
        name: "Freelance",
        description:
          "Diseñador | Desarrollador | Consultoría Transformación Digital",
        years: "2021 ~",
      },
      {
        name: "Mk Innovations",
        description: "Diseñador Gráfico",
        years: 2018,
      },
    ],
  },
  // Portfolio
  portfolio: {
    title: "Soy Alexgbcr",
    description: "Estos son algunos de los proyectos con los que he trabajado",
    companiesDescription: [
      {
        id: 1,
        company: "Estación Gourmet",
        profesion: "Diseño Gráfico",
        work: "Desarrollo web",
        image: `${googleDrivePhotosURL}1yGyQmBQN1tlceXSZTCB9-hicS8UfA8BR`,
        linkPage: "https://estaciongourmet.net/index.php",
        description:
          "Creación de landing page y creación de artes digitales para mostrarse en diferentes redes sociales de interes para la marca",
      },
      {
        id: 2,
        company: "Dogzilla",
        profesion: "Diseño Gráfico",
        work: "Transformación Digital",
        image: `${googleDrivePhotosURL}1b2c2q8BC6vx7rbxQIOsSmx4tSB3QSjjP`,
        description:
          "Creación de artes y animaciones digitales para mostrarse en diferentes redes sociales de interes para la marca, además de consultoria para las mejores prácticas para la transformación digital y branding de la marca.",
      },
      {
        id: 3,
        company: "Mk Innovations",
        profesion: "Diseño Gráfico",
        work: "Desarrollo web",
        image: `${googleDrivePhotosURL}14O_6QKKHP5bR5m-y7zCQfa703uQP3mvH`,
        linkPage: "https://alegbcr.github.io/mkinnovations_page/",
        description:
          "Creación de piezas gráficas tanto para uso digital como para formato fisico tanto para la marca como para los diferentes clientes de la marca.",
      },
      {
        id: 4,
        company: "Mind World",
        profesion: "Diseño Gráfico",
        work: "Transformación Digital",
        image: `${googleDrivePhotosURL}1oNaK1w5kd4ul1c7NZhxd_hsCDBlg-p2I`,
        description:
          "Desarrollo Javascript Full-Stack para el desarrollo de su producto digital.",
      },
    ],
  },
  // Knowledge
  // Gallery
  gallery: {
    title: "Galería",
    description:
      "Estos son algunos de los proyectos personales que he realizado.",
    //Logos
    subtitleLogos: "Creación o renovación de los identidad visual.",
    logos: [
      {
        id: 1,
        // image: `${googleDrivePhotosURL}1D2papj1WC696gkX3HLEUQUmNa9_0BkRl`,
        image: diamond,
      },
      {
        id: 2,
        // image: `${googleDrivePhotosURL}1Ahjlg54jkfFYuLqM2a2AedaYCjRWAAtN`,
        image: dogzilla,
      },
      {
        id: 3,
        // image: `${googleDrivePhotosURL}1wuQTaGT_WVUWJT7BJ9gl4EVOJevQ_MkP`,
        image: gallo_loco,
      },
      {
        id: 4,
        // image: `${googleDrivePhotosURL}1W8W6hlIgjXgOkdWwsnoW5P4mXyBZObed`,
        image: iclean,
      },
      {
        id: 5,
        // image: `${googleDrivePhotosURL}1FYkTnHcqo-2rZHVD501GoK4Xs8SvOhs7`,
        image: jam,
      },
      {
        id: 6,
        // image: `${googleDrivePhotosURL}1Jn7fSZIwln7RXkFchzDbko0DNq28Jads`,
        image: limon_vibes,
      },
      {
        id: 7,
        // image: `${googleDrivePhotosURL}1sl7kFQc74Xb5V2c3KrHDykZgStJZ_cho`,
        image: meentes_creativas,
      },
      {
        id: 8,
        // image: `${googleDrivePhotosURL}1JnSh9RuO7GXnFqAUSEGcXCpxT9BTQdmO`,
        image: mind_world,
      },
    ],
    // Designs
    subtitleDesigns: "Algunas de mis creaciones",
    designs: [
      {
        id: 1,
        // image: `${googleDrivePhotosURL}1yMmCz78ALBe9GxkAkVpqOHG7JWRswdee`,
        image: art1,
      },
      {
        id: 2,
        // image: `${googleDrivePhotosURL}1wnc37yCtdKo9cW2XyvZ15rVZv5WlSyEc`,
        image: art2,
      },
      {
        id: 3,
        // image: `${googleDrivePhotosURL}1pFu62E456lDxXcg61hd8w4viBfLncuSG`,
        image: art3,
      },
      {
        id: 4,
        // image: `${googleDrivePhotosURL}1pqnElNaXIRuMizwsAQNrP9SpqPoBZgmZ`,
        image: art4,
      },
      {
        id: 5,
        // image: `${googleDrivePhotosURL}1nWjJC95QIUHeN0SyYlGVijcejKltBGIU`,
        image: art5,
      },
      {
        id: 6,
        // image: `${googleDrivePhotosURL}1OkWpwP8DNZ4v2jez5A6VgcgbfMU42l2U`,
        image: art6,
      },
      {
        id: 7,
        // image: `${googleDrivePhotosURL}1rZE9ec2ZD0XIXYk12lbWo3Rg10J6y3sB`,
        image: art7,
      },
      {
        id: 8,
        // image: `${googleDrivePhotosURL}1unyKnRqN9XpdNyC3k-PuaHFzeIGpk3Mw`,
        image: art8,
      },
      {
        id: 9,
        // image: `${googleDrivePhotosURL}1dwe1Drr0jft2b3rNEtN1JIFTpCcON-VS`,
        image: art9,
      },
      {
        id: 10,
        // image: `${googleDrivePhotosURL}19n2XbQqMpHwkHaqWRbCQDMz08uhAPKkb`,
        image: art10,
      },
      {
        id: 11,
        // image: `${googleDrivePhotosURL}1oBXC-FSYAbBvqAy1HBcMd-1JaXF9ulkj`,
        image: art11,
      },
      {
        id: 12,
        // image: `${googleDrivePhotosURL}1zVRhzxsg4j84u0OjbWKKH6_zNmqq_1lW`,
        // image: art12,
      },
    ],
  },
  // Contact
  contact: {
    title: "Estemos en contacto",
    description: "Si crees que puedo servir siendo parte de tu proyecto",
    // image: contactImage,
    image: `${googleDrivePhotosURL}1zVRhzxsg4j84u0OjbWKKH6_zNmqq_1lW`,
  },
};

const useInitialSate = () => {
  const [state, setState] = useState(initialState);
  return { state };
};

export default useInitialSate;

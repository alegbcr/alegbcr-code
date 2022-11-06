import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Custom Hooks
import useWindowSize from "../hooks/useWindowSize";
// Data Context
import AppContext from "../context/AppContext";
// Styles
import "../styles/Menu.css";
// Icons
import { FaAlignRight, FaTimes } from "react-icons/fa";

const Menu = () => {
  const size = useWindowSize();
  const { state } = useContext(AppContext);

  let widthViewport = "";

  let classes = {
    grid: "min-[320px]:grid-cols-4",
  };

  console.log(classes.grid);

  if (size < 1024) {
    widthViewport = "mobileOrTable";
  } else if (size >= 1024) {
    widthViewport = "desktop";
  }

  return (
    <>
      <nav className="grid min-[320px]:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 main-menu__container">
        {widthViewport === "mobileOrTable" && (
          <MenuBurger
            logo={state.info.logo}
            categories={state.info.categories}
          />
        )}
        {widthViewport === "desktop" && (
          <MenuNavigation
            logo={state.info.logo}
            categories={state.info.categories}
            socialMedia={state.info.socialMedia}
          />
        )}
      </nav>
    </>
  );
};

const MenuBurger = (props) => {
  const [menuList, setMenuList] = useState(false);

  const handleModal = () => {
    setMenuList(!menuList);
  };

  return (
    <>
      <div className="grid min-[320px]:col-start-1 min-[320px]:col-span-4 min-[320px]:mx-5 sm:col-start-2 sm:col-end-6 md:col-start-2 md:col-end-8 justify-between menu__container">
        <picture className="image__container">
          <img src={props.logo} />
        </picture>
        {!menuList ? (
          <FaAlignRight onClick={handleModal} />
        ) : (
          <FaTimes onClick={handleModal} />
        )}
        {menuList && <MenuList categories={props.categories} />}
      </div>
    </>
  );
};

const MenuList = (props) => {
  console.log(props);
  return (
    <div className="menu-list__container">
      <ul className="menu-category-list__container">
        {props.categories.map((category) => (
          <li key={category.id} className="menu-category-list--item">
            <NavLink className={"category-navigation"} to={category.path}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <small>Stay up until the Sun rises</small>
      {/* <ul className="menu-category__container">
        {props.socialMedia.map((item) => (
          <li key={item.id} className="menu-category--item">
            <a className="social-media" target="blank" href={item.reference}>
              {item.iconName}
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

const MenuNavigation = (props) => {
  console.log(props);
  return (
    <>
      <div className="grid lg:col-start-2 lg:col-end-12  menu__container">
        <picture className="image__container">
          <img src={props.logo} />
        </picture>
        <ul className=" menu-category__container">
          {props.categories.map((category) => (
            <li key={category.id} className="menu-category--item">
              <NavLink className={"category-navigation"} to={category.path}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="menu-category__container">
          {props.socialMedia.map((item) => (
            <li key={item.id} className="menu-category--item">
              <a className="social-media" target="blank" href={item.reference}>
                {item.iconName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;

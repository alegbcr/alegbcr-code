import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

// Custom Hooks
import useInitialSate from "../hooks/initialState";
import AppContext from "../context/AppContext";

import Menu from "../containers/Menu";
// Pages
import Portfolio from "../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import MyTools from "../pages/MyTools";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function App() {
  const initialState = useInitialSate();
  return (
    <AppContext.Provider value={initialState}>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-tools" element={<MyTools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;

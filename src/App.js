import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Footer } from "./components";
import { Home, SinglePage } from "./pages";

const App = () => {
  return (
    <div className="bg-primary  py-[2rem] px-[1rem]">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
              <Route path="single" element={<SinglePage />} />
            </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

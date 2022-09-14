import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {Home} from "./pages";

const App = () => {
  return (
    <div className="bg-primary  p-[1.4rem]">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
<Footer />

    </div>
  );
};

export default App;

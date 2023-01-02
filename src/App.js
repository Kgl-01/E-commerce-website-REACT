import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import "./App.css";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

const WomensPage = () => {
  return <h1>WOMENS SHOPPING PAGE</h1>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="shop/*">
            <Route index element={<ShopPage />} />
            <Route path="hats" element={<HatsPage />} />
            <Route path="womens" element={<WomensPage />} />
          </Route>
        </Route>
        {/* <Route path="/hats" element={<HatsPage />} />
        <Route path="/womens" element={<WomensPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

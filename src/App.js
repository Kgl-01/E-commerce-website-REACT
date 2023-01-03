import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  const [state, setState] = useState({ currentUser: null });

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setState({ currentUser: user });
      console.log(user);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header currentUser={state.currentUser} />
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="signIn" element={<SignInAndSignUpPage />} />
          <Route path="shop/*">
            <Route index element={<ShopPage />} />
            {/* <Route path="hats" element={<HatsPage />} />
            <Route path="womens" element={<WomensPage />} /> */}
          </Route>
        </Route>
        {/* <Route path="/hats" element={<HatsPage />} />
        <Route path="/womens" element={<WomensPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;

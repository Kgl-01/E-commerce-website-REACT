import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [state, setState] = useState({ currentUser: null });

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setState({ currentUser: userAuth });
      }
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
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

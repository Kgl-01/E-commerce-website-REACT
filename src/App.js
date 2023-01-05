import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

const App = (props) => {
  useEffect(() => {
    const { setCurrentUser } = props;
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header />
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);

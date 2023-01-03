import { useState } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.scss";

const SignIn = (props) => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account!</h2>
      <span>Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          required
          handleChange={handleChange}
          label={"Email"}
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          required
          handleChange={handleChange}
          label={"Password"}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

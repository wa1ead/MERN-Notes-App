import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import PasswordInput from "../../components/input/PasswordInput";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={() => {}}>
            <h4 className="text-2xl mb-7"></h4>
            <input type="text" placeholder="email" className="input-box" />
            <PasswordInput />
            <button type="submit" className="btn-primary">
              {" "}
              Login
            </button>
            <p className="text-sm text-center mt-4">
              Not registrated yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

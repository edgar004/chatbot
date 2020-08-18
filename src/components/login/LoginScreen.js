import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import "./styles.css";

export const LoginScreen = ({ history }) => {
  const { setUser } = useContext(UserContext);
  const [formValues, handleInputChange] = useForm({
    cedula: "",
    password: "",
  });

  const { cedula, password } = formValues;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (cedula && password) {
      await setUser({ cedula, password });
      history.replace("/chatbot");
    } else {
      alert("error en campos");
    }
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>LOGIN</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Cedula *"
                name="cedula"
                value={cedula}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mt-4">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="form-group">
              <Link to="#" className="ForgetPwd">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
        <div className="col-md-6 login-form-2 container">
          <h3>BIENVENIDO!!</h3>
        </div>
      </div>
    </div>
  );
};

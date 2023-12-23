import "./ButtonLogin.css";
import { Link } from "react-router-dom";

const ButtonLogin = () => {
  return (
    <div className="rn-group-login">
      <Link to="/login" className="rn-btn-login">Login</Link>
      <Link to= "/register">Register</Link>
    </div>
  );
};

export default ButtonLogin;

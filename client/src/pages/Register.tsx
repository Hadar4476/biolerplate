import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const onRegister = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Register Page</h1>
      <button onClick={onRegister}>submit</button>
      <br />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Register;

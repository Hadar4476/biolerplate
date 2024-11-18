import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const navigate = useNavigate();

  const onRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onLogin}>Login</button>
      <button onClick={onRegister}>Register</button>
    </div>
  );
};

export default Login;

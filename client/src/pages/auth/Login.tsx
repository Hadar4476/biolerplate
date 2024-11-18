import { useNavigate } from "react-router-dom";

import { Button, TextField, Box, Typography } from "@mui/material";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const navigate = useNavigate();

  const onRegister = () => {
    navigate("/register");
  };

  return (
    <Box className="max-w-sm mx-auto mt-8">
      <Typography variant="h5" className="mb-4">
        Login
      </Typography>
      <TextField label="Email" variant="outlined" fullWidth className="mb-4" />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        className="mb-4"
      />
      <Button variant="contained" color="primary" fullWidth onClick={onLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;

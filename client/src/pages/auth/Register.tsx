import { useNavigate } from "react-router-dom";

import { Button, TextField, Box, Typography } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const onRegister = () => {
    navigate("/login");
  };

  return (
    <Box className="max-w-sm mx-auto mt-8">
      <Typography variant="h5" className="mb-4">
        Register
      </Typography>
      <TextField label="Name" variant="outlined" fullWidth className="mb-4" />
      <TextField label="Email" variant="outlined" fullWidth className="mb-4" />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        className="mb-4"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onRegister}
      >
        Register
      </Button>
    </Box>
  );
};

export default Register;

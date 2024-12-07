import { Button, TextField, Box, Typography } from "@mui/material";
import { useLogin } from "./useLogin";

const Login = () => {
  const { formik, isPending, error } = useLogin();

  return (
    <Box className="max-w-sm mx-auto mt-8 p-4 shadow-lg rounded-lg">
      <Typography variant="h5" className="mb-4 text-center">
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        {error && (
          <Typography color="error" className="mb-4">
            {error.message}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          className="!w-full"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Box>
  );
};

export default Login;

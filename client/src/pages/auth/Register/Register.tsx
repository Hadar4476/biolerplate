import { Button, TextField, Box, Typography } from "@mui/material";

import { useRegister } from "./useRegister";

const Register = () => {
  const { formik, isPending, error } = useRegister();

  return (
    <Box className="max-w-sm mx-auto mt-8 p-4 shadow-lg rounded-lg">
      <Typography variant="h5" className="mb-4 text-center">
        Register
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
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
          disabled={isPending}
        >
          {isPending ? "Registering in progress..." : "Register"}
        </Button>
      </form>
    </Box>
  );
};

export default Register;

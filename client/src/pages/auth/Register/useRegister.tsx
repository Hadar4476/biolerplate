import * as Yup from "yup";
import { useFormik } from "formik";
import { useRegisterApi } from "@/api/useAuth";
import { useNavigate } from "react-router-dom";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  const navigate = useNavigate();

  const { mutate, isPending, error } = useRegisterApi();

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .trim()
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .trim()
      .required("Password is required"),
  });

  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: (data) => {
          const userId = data;

          console.log("Register successful:", userId);

          navigate("/login");
        },
        onError: (error) => {
          console.error("Register failed:", error);
        },
      });
    },
  });

  return {
    formik,
    isPending,
    error,
  };
};
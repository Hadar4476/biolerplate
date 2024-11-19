import { body } from "express-validator";

export const isEmail = () =>
  body("email").isEmail().withMessage("Must be a valid email address");

export const isPassword = () =>
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long");

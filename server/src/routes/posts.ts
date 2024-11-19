import express from "express";

import { validate } from "../middleware/validate";
import { postValidation } from "../validators/posts";

import postController from "../controllers/posts";

const router = express.Router();

router.get("/", postController.getPosts);

router.get("/:postId", postController.getPostById);

router.post("/", postValidation, validate, postController.createPost);

router.put("/:postId", postValidation, validate, postController.updatePost);

router.delete("/:postId", postController.deletePost);

export default router;

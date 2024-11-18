import express from "express";
import postController from "../controllers/posts";

const router = express.Router();

router.get("/", postController.getPosts);

router.get("/:postId", postController.getPostById);

router.post("/", postController.createPost);

router.put("/:postId", postController.updatePost);

router.delete("/:postId", postController.deletePost);

export default router;

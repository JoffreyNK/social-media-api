import {Router} from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/posts.js";

const router = Router()

router.get("/", getPosts)

router.post("/", addPost)

router.get("/:id", getPost)

router.post("/delete", deletePost)


// router.patch("/", updatePost)

export default router
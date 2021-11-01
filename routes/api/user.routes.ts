import bodyParser from "body-parser";

import express from "express";

const router = express.Router();

import auth from "../../middelware/auth";

import userController from "../../controllers/user.controller";
/* User Router */
/**
 * @swagger
 * tags:
 *  name: Users
 *  description: All user routes
 */
/**
 * @swagger
 * /signup:
 *  post:
 *    tags: [Users]
 *    description: User to signup
 *    responses:
 *      '200':
 *        description: user signup successfully
 */
router.post("/signUp", bodyParser.json(), userController.signUp);
/* User Router */
/**
 * @swagger
 * /logIn:
 *  post:
 *    tags: [Users]
 *    description: User to login
 *    responses:
 *      '200':
 *        description: user login successfully
 */
router.post("/logIn", bodyParser.json(), userController.logIn);
/* User Router */
/**
 * @swagger
 * /detail:
 *  get:
 *    tags: [Users]
 *    description: User detail
 *    responses:
 *      '200':
 *        description: user detail fetched successfully
 */
router.get("/detail", bodyParser.json(), auth, userController.detail);
/* User Router */
/**
 * @swagger
 * /updateProfile:
 *  put:
 *    tags: [Users]
 *    description: User profile api
 *    responses:
 *      '200':
 *        description: user profile updated successfully
 */
router.put(
  "/updateProfile",
  bodyParser.json(),
  auth,
  userController.updateProfile
);
/* User Router */
/**
 * @swagger
 * /changePassword:
 *  put:
 *    tags: [Users]
 *    description: User change Password api
 *    responses:
 *      '200':
 *        description: user password changed successfully
 */
router.put(
  "/changePassword",
  bodyParser.json(),
  auth,
  userController.changePassword
);
/* User Router */
/**
 * @swagger
 * /deleteUser:
 *  delete:
 *    tags: [Users]
 *    description: User delete api
 *    responses:
 *      '200':
 *        description: user deleted successfully
 */
router.delete(
  "/deleteUser",
  bodyParser.json(),
  auth,
  userController.deleteUser
);

export default router;

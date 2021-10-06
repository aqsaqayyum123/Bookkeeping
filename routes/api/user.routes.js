const express = require("express");
const router = express.Router();

const userController = require("../../controllers/user.controller");
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
router.post("/signup", userController.signUp);
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
router.post("/logIn", userController.logIn);
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
router.get("/detail", userController.detail);
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
router.put("/updateProfile", userController.updateProfile);
/* User Router */
/**
 * @swagger
 * /logOut:
 *  post:
 *    tags: [Users]
 *    description: User logout api
 *    responses:
 *      '200':
 *        description: user logout successfully
 */
router.post("/logOut", userController.logOut);

module.exports = router;

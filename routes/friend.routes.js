const express = require("express");

const router = express.Router();

const friendController = require("../controllers/friend.controller");

/* Friend Router */
/**
 * @swagger
 * /friendList:
 *  get:
 *    description: all friends listing api
 *    responses:
 *      '200':
 *        description: friends list fetched successfully
 */
router.get("/friendList", friendController.friendList);
/**
 * @swagger
 * /friendDetail:
 *  get:
 *    description: friend detail api
 *    responses:
 *      '200':
 *        description: friend detail fetched successfully
 */
router.get("/friendDetail", friendController.friendDetail);
/**
 * @swagger
 * /friendAdd:
 *  post:
 *    description: friends add api
 *    responses:
 *      '200':
 *        description: friend added successfully
 */
router.post("/friendAdd", friendController.friendAdd);
/**
 * @swagger
 * /friendUpdate:
 *  put:
 *    description: friend update api
 *    responses:
 *      '200':
 *        description: friend updated successfully
 */
router.put("/friendUpdate", friendController.friendUpdate);
/**
 * @swagger
 * /friendDelete:
 *  delete:
 *    description: friend delete api
 *    responses:
 *      '200':
 *        description: friend deleted successfully
 */
router.delete("/friendDelete", friendController.friendDelete);
/**
 * @swagger
 * /sendInvite:
 *  post:
 *    description: friend invite api
 *    responses:
 *      '200':
 *        description: friends invited successfully
 */
router.post("/sendInvite", friendController.sendInvite);

module.exports = router;

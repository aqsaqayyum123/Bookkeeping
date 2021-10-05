const express = require("express");

const router = express.Router();

const groupController = require("../controllers/group.controller");

/* Group Router */
/**
 * @swagger
 * /groupList:
 *  get:
 *    description: all groups listing api
 *    responses:
 *      '200':
 *        description: groups list fetched successfully
 */
router.get("/groupList", groupController.groupList);
/**
 * @swagger
 * /groupDetail:
 *  get:
 *    description: group detail api
 *    responses:
 *      '200':
 *        description: group detail fetched successfully
 */
router.get("/groupDetail", groupController.groupDetail);
/**
 * @swagger
 * /groupAdd:
 *  post:
 *    description: group add api
 *    responses:
 *      '200':
 *        description: group added successfully
 */
router.post("/groupAdd", groupController.groupAdd);
/**
 * @swagger
 * /groupUpdate:
 *  put:
 *    description: update group api
 *    responses:
 *      '200':
 *        description: group updated successfully
 */
router.put("/groupUpdate", groupController.groupUpdate);
/**
 * @swagger
 * /groupDelete:
 *  delete:
 *    description: delete group api
 *    responses:
 *      '200':
 *        description: group deleted successfully
 */
router.delete("/groupDelete", groupController.groupDelete);

module.exports = router;

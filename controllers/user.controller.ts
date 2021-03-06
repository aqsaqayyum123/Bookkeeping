import bcrypt from "bcrypt";

import db from "../models";

import * as valid from "../validations/validation";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { initializeApp } from "firebase/app";

import {
  api_key,
  auth_domain,
  project_id,
  storage_bucket,
  sender_id,
  app_id,
} from "../config/firebase";

const firebaseConfig = {
  apiKey: api_key,
  authDomain: auth_domain,
  projectId: project_id,
  storageBucket: storage_bucket,
  messagingSenderId: sender_id,
  appId: app_id,
};

initializeApp(firebaseConfig);

const signUp = async function (req, res, _next) {
  //console.log("its working 1");
  try {
    let auth;
    let userCredential;
    let firebaseUser;
    let token;
    let uuid;
    const { error } = valid.validateUserSchema(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //if phone number already exist
    //console.log("its working");
    console.log(req.body);
    console.log("dbbb", db.User);

    const user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log("user:::::: ", user);
    if (user != null) return res.status(400).send("Email already registered!");
    auth = getAuth();
    userCredential = await createUserWithEmailAndPassword(
      auth,
      req.body.email,
      req.body.password
    );
    firebaseUser = userCredential.user;
    uuid = firebaseUser.uid;
    token = await auth.currentUser.getIdToken();
    // Register User
    const newUser = {
      uuid: uuid,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
      isVerified: false,
    };
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    let addUser = null;
    try {
      addUser = await db.User.create(newUser);
      await sendEmailVerification(auth.currentUser);
      res.send(req, res, { user: newUser, msg: "verification email sent" });
    } catch (ex) {
      for (let i in ex.error) {
        return res.send(ex.error[i].message);
      }
    }

    res.header("x-auth-token", token).send({
      name: addUser.name,
      email: addUser.email,
      msg: "User Registered Successfully",
    });
  } catch (error) {
    return res.send(error);
  }
};

const logIn = async function (req, res, _next) {
  try {
    const { error } = valid.validateSignIn(req.body);
    let auth;
    let userCredential;
    let firebaseUser;
    let uuid;
    let emailVerified;
    let token;
    auth = getAuth();
    userCredential = await signInWithEmailAndPassword(
      auth,
      req.body.email,
      req.body.password
    );
    firebaseUser = userCredential.user;
    uuid = firebaseUser.uid;
    emailVerified = firebaseUser.emailVerified;
    if (error) return res.status(400).send(error.details[0].message);
    token = await auth.currentUser.getIdToken();
    const user = await db.Users.findAll({
      where: {
        uuid: uuid,
        email: req.body.email,
      },
    });
    //console.log("user find:", user);
    if (user.length === 0)
      return res.status(400).send("User does not exist with this email");
    const matchPassword = await bcrypt.compare(
      req.body.password,
      user[0].dataValues.password
    );
    if (!matchPassword)
      return res.status(400).send("Invalid email or password!");
    if (emailVerified && user.isVerified === false) {
      await db.Users.update({ isVerified: true }, { where: { uuid: uuid } });
      user.isVerified = true;
    }
    return res.send({
      token: token,
      msg: "Sign in Successfully",
    });
  } catch (error) {
    return res.send(error);
  }
};

const detail = async function (req, res) {
  const user = await db.Users.findOne({
    where: {
      id: req.body.id,
    },
    attributes: ["id", "name", "email", "mobile"],
  });
  //console.log("testingggggg", user);
  if (user) return res.send(user);
  return res.status(404).send("No Data Found");
};

const updateProfile = async function (req, res) {
  const { error } = valid.validateUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log("data:", req.body);
  db.Users.update(
    { name: req.body.name, email: req.body.email, mobile: req.body.mobile },
    { where: { id: req.body.id } }
  )
    .then((updatedUser) => {
      console.log("user Updated Successfully", updatedUser);
      return res.send({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
      });
    })
    .catch((err) => console.log("error:", err));
};

const changePassword = async function (req, res) {
  const { error } = valid.validateChangePassword(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await db.Users.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (user) {
    const validPassword = await bcrypt.compare(
      req.body.oldPassword,
      user.dataValues.password
    );
    if (!validPassword)
      return res.status(400).send("You entered old password wrong!");
    const newUser = {
      password: req.body.newPassword,
    };
    try {
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      db.Users.update(
        { password: newUser.password },
        { where: { email: req.body.email } }
      )
        .then((response) => {
          console.log("password updated successfully!", response);
          return res.send({
            email: req.body.email,
          });
        })
        .catch((err) => console.log("err:", err));
      return;
    } catch (ex) {
      for (let i in ex.errors) {
        return res.send(ex.errors[i].message);
      }
    }
  } else {
    return res.status(400).send("Invalid password!");
  }
};

const deleteUser = async function (req, res) {
  try {
    const user = await db.Users.destroy({
      where: {
        id: req.body.id,
      },
    });
    console.log(user);
    if (user.length != 0)
      return res.status(200).send({
        msg: "Record deleted successfully",
      });
    return res.status(404).send("No record found");
  } catch (ex) {
    console.log(ex);
  }
};
const userController = {
  signUp,
  logIn,
  detail,
  updateProfile,
  changePassword,
  deleteUser,
};

export default userController;

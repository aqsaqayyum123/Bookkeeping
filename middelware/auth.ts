import admin from "firebase-admin";

import serviceAccount from "../serviceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

async function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    let decodedToken = await admin.auth().verifyIdToken(token);
    console.log(decodedToken);
    req.user = decodedToken;
    next();
  } catch (ex) {
    console.log("error: ", ex);
    return res.status(400).send("Invalid token.");
  }
}

export default auth;

const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log("Token", token);
  // console.log("AuthHeader", authHeader);
  // console.log("SplitAuthHeader", authHeader.split(" ")[1]);

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err);

      return res.sendStatus(401);
    }
    // console.log(user);

    req.user = user;
    next();
  });
};

module.exports = {
  authenticateToken,
};

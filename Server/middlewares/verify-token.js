const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  let token = req.headers["x-access-token"] || req.headers["authorization"]; // if someone makes a request to the Header in this header is "authorization" or "x-access-token" then save the value of these requests to token(in our case someone has to make a request with the valid token)
  let checkBearer = "Bearer ";

  if (token) {
    // if token exists  then go in this statement
    if (token.startsWith(checkBearer)) {
      // check if token beginns with the value of checkBearer if yes then go in this statement
      token = token.slice(checkBearer.length, token.length); // delete the checkBearer from the actual token
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      // the token will be verified and to do that we have also give the private access key, because without it we can not become a decoded token
      if (err) {
        res.json({
          success: false,
          message: "Failed to authenticate",
        });
      } else {
        req.decoded = decoded; // give the decoded token to the req.decoded, so that it can be used
        next(); // done with the operation
      }
    });
  } else {
    res.json({
      success: false,
      message: "No token Provided",
    });
  }
};

const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1]; //Split after Bearer and take save token
  }

  if (!token) {
    res.status(401).json({ success: false});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(
        res
          .status(404)
          .json({ success: false, error: "No user found with this id" })
      );
    }

    req.user = user;
    next();
  } catch (error) {
    return next(
      res
        .status(401)
        .json({ success: false })
    );
  }
};

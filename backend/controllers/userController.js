// @des Register new user
// @route Post /api/users/
// @access Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// @des Authenticate  user
// @route Post /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// @des Get user data
// @route Get /api/users/me
// @access Public
const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

const config = require("../config/auth.config");
const { User } = require("../models");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.register = (req, res) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role,
    facultyId: req.body.facultyId
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    }

    user.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.send({ message: "User was register successfully!" });
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
    role: "Student",
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      falcutyId: user.facultyId,
      accessToken: token,
    });
  });
};
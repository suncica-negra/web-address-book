const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();

const router = express.Router();

app.use(cors());

mongoose.connect("mongodb+srv://USER:PASSWORD@SOME_URL.mongodb.net/web_address_bookDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  }
});

userSchema.plugin(uniqueValidator);

const User = new mongoose.model("User", userSchema);

process.env.SECRET_KEY = "secret";

router.post("/register", (req, res) => {
  const userData = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        userData.password = hash
        User.create(userData).then(user => {
          let idToken = jwt.sign(userData, process.env.SECRET_KEY, {
            expiresIn: "1h"
          });
          res.send({
            user,
            idToken
          });
        }).catch(err => {
          res.send(`error: ` + err);
        });
      });
    } else {
      res.json({
        error: `User already exists`
      });
    }
  }).catch(err => {
    res.send(`error: ` + err);
  });
});

router.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const payload = {
          email: user.email,
          name: user.name,
          username: user.username
        }
        let idToken = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: "1h"
        });
        res.send({
          user,
          idToken
        });
      } else {
        res.json({
          error: `User does not exist`
        });
      }
    } else {
      res.json({
        error: `User does not exist`
      });
    }
  }).catch(err => {
    res.send(`error: ` + err);
  });
});

router.get("/user/:email", (req, res) => {
  User.findOne({
    email: req.params.email
  }).then(user => {
    if (user) {
      var email = user.email;
      res.send({
        email
      });
    } else {
      res.json({
        error: `User does not exist`
      });
    }
  }).catch(err => {
    res.send(`error: ` + err);
  });
});

module.exports = router;
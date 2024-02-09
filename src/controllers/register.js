const Register = require("../models/register");

const register = async (req, res) => {
  try {
    const {
      domain,
      kiitemail,
      email,
      name,
      roll,
      gender,
      contactNumber,
      yearOfStudy,
      branch,
      links,
      existSocieties,
      whyElabs,
      anythingElse,
    } = req.body;
    await Register.create({
      domain,
      kiitemail,
      email,
      name,
      roll,
      gender,
      contactNumber,
      yearOfStudy,
      branch,
      links,
      existSocieties,
      whyElabs,
      anythingElse,
    });
    res.status(201).json({ success: true, msg: "student registered" });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = {
  register,
};

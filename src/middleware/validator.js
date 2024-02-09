const validator = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = validator;

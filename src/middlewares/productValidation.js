export const productValidation = (req, res, next) => {
    !req.body.title ||
    !req.body.description ||
    !req.body.code ||
    !req.body.price ||
    !req.body.stock ||
    !req.body.category
      ? res.status(404).json({ msg: "producto invalido, requiere otras propiedades" })
      : next();
  };
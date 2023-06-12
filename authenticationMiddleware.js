const fakeData = require("./fakeData");

const authenticationMiddleware = (req, res, next) => {
  const userId = 2; // ID do usuário que queremos autenticar

  const user = fakeData.find((user) => user.id === userId);

  if (!user) {
    return res.status(401).send("Usuário não autenticado");
  }

  req.user = user;

  next();
};

module.exports = authenticationMiddleware;

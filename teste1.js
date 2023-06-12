let data = require("./fakeData");

const getUser = (req, res) => {
  try {
    const name = req.query.name;

    const user = data.find((user) => user.name === name);

    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }

    user.readCount = (user.readCount || 0) + 1;

    res.send(user);
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

const getUsers = (_req, res) => {
  try {
    res.send(data);
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

module.exports = {
  getUser,
  getUsers,
};

const data = require("./fakeData");

const getUserAccessCount = (req, res) => {
  try {
    const name = req.query.name;

    const user = data.find((user) => user.name === name);

    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }

    res.send(`Usuário ${name} foi lido ${user.readCount || 0} vezes.`);
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

module.exports = getUserAccessCount;

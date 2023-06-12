const data = require("./fakeData");

module.exports = (req, res) => {
  try {
    const name = req.query.name;

    const index = data.findIndex((user) => user.name === name);

    if (index !== -1) {
      data.splice(index, 1);
      res.send("success");
    } else {
      res.send("Usuário não encontrado");
    }
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

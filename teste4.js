const data = require("./fakeData");

const updateUser = (req, res) => {
  try {
    const id = req.query.id;
    const { name, job, canUpdate, canDelete } = req.body;

    const user = data.find((user) => user.id == id);

    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }

    Object.assign(user, {
      name,
      job,
      canUpdate: canUpdate || false,
      canDelete: canDelete || false,
    });

    res.send(user);
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

module.exports = updateUser;

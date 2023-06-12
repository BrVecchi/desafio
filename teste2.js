const data = require("./fakeData");

module.exports = (req, res) => {
  const generateUniqueId = () => {
    const ids = data.map((user) => user.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  };

  try {
    const { name, job, canDelete, canUpdate } = req.body;

    const newUser = {
      id: generateUniqueId(),
      name,
      job,
      canUpdate: canUpdate || false,
      canDelete: canDelete || false,
    };

    data.push(newUser);

    res.send(newUser);
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

const data = require("./fakeData");

module.exports = (req, res) => {
  try {
    const { name, job } = req.body;

    const newUser = {
      name,
      job,
    };

    data.push(newUser);

    res.send(newUser);
  } catch (error) {
    res.status(500).send("Erro ao processar a solicitação");
  }
};

const permissionsMiddleware = (req, res, next) => {
  const user = req.user;

  if (!user) {
    return res.status(401).send("Usuário não autenticado");
  }

  if (req.method === "DELETE" && !user.canDelete) {
    return res.status(403).send("Acesso negado para exclusão de usuários");
  }

  if (req.method === "PUT" && !user.canUpdate) {
    return res.status(403).send("Acesso negado para atualização de usuários");
  }

  next();
};

module.exports = permissionsMiddleware;

function status(req, res) {
  res.status(200).json({ chave: "Primeiro endpoint" });
}

export default status;

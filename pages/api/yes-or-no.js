const allAvos = async (req, res) => {
  const answer = Math.round(Math.random()) ? "yes" : "no";

  res.status(200).json({
    data: answer,
    error: null,
  });
};

export default allAvos;

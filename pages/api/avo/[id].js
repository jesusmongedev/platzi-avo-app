import DB from "@database";

const Avo = async (request, res) => {
  const id = request.query.id;

  const db = new DB();
  const avo = await db.getById(id);

  res.status(200).json({ data: avo });
};

export default Avo;

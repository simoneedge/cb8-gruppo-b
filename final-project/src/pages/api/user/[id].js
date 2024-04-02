export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    res.status(200).json({ message: "SINGOLO UTENTE CON ID: " + id });
  }
}

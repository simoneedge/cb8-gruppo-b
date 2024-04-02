export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    res.status(200).json({ message: "SINGOLA ESPERIENZA CON ID: " + id });
  }
}

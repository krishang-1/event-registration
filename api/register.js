let registrations = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Invalid input" });
    }

    registrations.push({ name, email, time: new Date().toISOString() });

    return res.status(200).json({ message: "Registration successful!" });
  }

  if (req.method === "GET") {
    return res.status(200).json(registrations);
  }

  res.status(405).json({ message: "Method not allowed" });
}

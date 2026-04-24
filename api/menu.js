export default function handler(req, res) {
  res.status(200).json([
    { title: "Home", page: "home" },
    { title: "Schedule", page: "schedule" },
    { title: "Team", page: "team" },
    { title: "About", page: "about" },
    { title: "Rules", page: "rules" },
    { title: "Rankings", page: "rankings" }
  ]);
}
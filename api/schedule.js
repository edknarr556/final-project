export default function handler(req, res) {
  res.status(200).json([
    { title: "Featherweight Match", date: "Monday" },
    { title: "Middleweight Match", date: "Tuesday" },
    { title: "Heavyweight Match", date: "Wednesday" }
  ]);
}
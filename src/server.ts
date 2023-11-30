import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use(express.json());

type PathOfExile = {
  id: Number;
  name: String;
  type: String;
  weapon: String;
};

type PathOfExiles = PathOfExile[];

let dbPathOfExile: PathOfExiles = [
  {
    id: 1,
    name: "Scion",
    type: "Strength",
    weapon: "Wand",
  },
  {
    id: 2,
    name: "Marauder",
    type: "Strength",
    weapon: "Maces",
  },
  {
    id: 3,
    name: "Duelist",
    type: "Strength",
    weapon: "Axes",
  },
  {
    id: 4,
    name: "Ranger",
    type: "Dexterity",
    weapon: "Bow",
  },
  {
    id: 5,
    name: "Shadow",
    type: "Dexterity",
    weapon: "Daggers",
  },
  {
    id: 6,
    name: "Witch",
    type: "Intelligence",
    weapon: "Wand",
  },
  {
    id: 7,
    name: "Templar",
    type: "Strength",
    weapon: "Staves",
  },
];

app.get("/pathofexile/:name", (req, res) => {
  const { name } = req.params;
  const path = dbPathOfExile.find((p) => p.name === String(name));
  res.status(200).json(path);
});

app.post("/pathofexile/", (req, res) => {
  const { id, name, type, weapon } = req.body;
  const newCharacter = { id, name, type, weapon };
  dbPathOfExile = [...dbPathOfExile, newCharacter];
  res.status(201).json({ msg: "New Character was created" });

  console.log(dbPathOfExile);
});
app.put("/pathofexile/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  dbPathOfExile = dbPathOfExile.map((t) =>
    t.id === Number(id) ? { ...t, name } : t
  );
  res.status(200).json({ msg: "The Name was created" });
  console.log(dbPathOfExile);
});

app.delete("/pathofexile/:id", (req, res) => {
  const { id } = req.params;
  dbPathOfExile = dbPathOfExile.filter((t) => t.id !== Number(id));
  res.status(200).json({ msg: "The Character was deleted" });
  console.log(dbPathOfExile);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/pathofexile/`);
});

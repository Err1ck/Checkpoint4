import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/pathofexile/`);
});

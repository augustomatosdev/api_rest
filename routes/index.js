const { Router } = require("express");
const router = Router();
const movies = require("../db/movies");
const _ = require("underscore");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  if (name && gender && year) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    movies.push(newMovie);
    res.send(newMovie);
  } else {
    res.send("wrong request");
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(movies, (movie, i) => {
    if (movie.id === id) {
      movies.splice(i, 1);
    }
    res.send(movies);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, gender, year } = req.body;
  _.each(movies, (movie, i) => {
    if (movie.id === id) {
      movie.name = name;
      movie.gender = gender;
      movie.year = year;
    }
  });
  res.send(movies);
});

module.exports = router;

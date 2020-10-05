const { fullName, people } = require("../exercise-3");

const people2 = [
  { age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

test("Exercise 3", () => {
  expect(fullName(people)).toStrictEqual([
    "Alyssa P. Hacker",
    "Ben Bitdiddle",
    "Eva Lu Ator",
    "Lem E. Tweakit",
    "Louis Reasoner",
    "Shahan Haig Krakirian",
  ]);
  expect(fullName(people2)).toStrictEqual([
    "Ben Bitdiddle",
    "Eva Lu Ator",
    "Lem E. Tweakit",
    "Louis Reasoner",
    "Shahan Haig Krakirian",
  ]);

});


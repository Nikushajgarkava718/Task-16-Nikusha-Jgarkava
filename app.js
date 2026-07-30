const numbers = [2, 4, 8, 16, 32];
const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
const average = sum / numbers.length;
console.log(`${sum}`);
console.log(`${average}`);

const movie = {
  movieName: "Troy",
  genre: "Action/Drama",
  streamingPlatforms: ["Netflix", "HBO Max", "Amazon Prime"],
};

console.log(
  `${movie.movieName}, which is a ${movie.genre} movie, is available on ${movie.streamingPlatforms[0]}.`,
);

const books = [
  {
    title: "the Odyssey",
    author: "Homer",
    yearPublished: "8th century BCE",
  },
  {
    title: "the Odyssey",
    author: "Homer",
    yearPublished: "8th century BCE",
  },
];

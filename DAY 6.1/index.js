class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log("Title:", casinoRoyale.title);
console.log("Studio:", casinoRoyale.studio);
console.log("Rating:", casinoRoyale.rating);

const moviesArray = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "PG-13"),
  new Movie("Movie3", "Studio3", "R"),
];

const pgMovies = Movie.getPG(moviesArray);

console.log("PG Rated Movies:");
pgMovies.forEach((movie) => {
  console.log(
    "Title:",
    movie.title,
    "| Studio:",
    movie.studio,
    "| Rating:",
    movie.rating
  );
});

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
}

const person = new Person("BARATH", 23, "ASSISTANT MANAGER ");

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Occupation:", person.occupation);

// UBER PRICE CALCULATION

class UberPriceCalculator {
  constructor(distance, duration, surgeMultiplier = 1) {
    this.distance = distance;
    this.duration = duration; 
    this.surgeMultiplier = surgeMultiplier; 
  }

  calculatePrice() {
    const baseFare = 20;
    const costPerKilometer = 5; 
    const costPerMinute = 3; 

   
    let fareWithoutSurge =
      baseFare +
      this.distance * costPerKilometer +
      this.duration * costPerMinute;

    let finalFare = fareWithoutSurge * this.surgeMultiplier;

    return finalFare.toFixed(0);
  }
}
const ride = new UberPriceCalculator(30, 10, 5 );
const fare = ride.calculatePrice();
console.log("Your Uber ride will cost RS:", fare);

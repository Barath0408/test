fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const asiaCountries = data.filter((country) => country.region === "Asia");
    console.log(
      "Countries in Asia:",
      asiaCountries.map((country) => country.name.common)
    );

    const countriesWithPopulationLessThan2Lakhs = data.filter(
      (country) => country.population < 200000
    );
    console.log(
      "Countries with population less than 2 lakhs:",
      countriesWithPopulationLessThan2Lakhs.map(
        (country) => country.name.common
      )
    );

    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital && country.capital[0]);
      console.log("Flag:", country.flags && country.flags.svg);
    });

    
    const totalPopulation = data.reduce(
      (acc, country) => acc + (country.population || 0),
      0
    );
    console.log("Total population of countries:", totalPopulation);

    
    const countryWithUSD = data.find(
      (country) => country.currencies && country.currencies.USD
    );
    console.log(
      "Country that uses US dollars as currency:",
      countryWithUSD && countryWithUSD.name.common
    );
  })
  .catch((error) => console.log("Error fetching data:", error));

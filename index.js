const fs = require('fs');

function queryDogBreed(breed, callback) {
  fs.readFile('dogs.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    try {
      const dogs = JSON.parse(data).data;

      if (!Array.isArray(dogs)) {
        console.error('dogs.json does not contain an array.');
        return;
      }

      // use filter to get all the Spaniels
      const spaniels = dogs.filter((dog) => dog.Breed.includes(breed));

      if (spaniels.length > 0) {
        // create a string with all the Spaniels and their ranks
        let result = `Here are all the ${breed}s:\n`;
        for (let spaniel of spaniels) {
          result += `${spaniel.Breed} is ranked ${spaniel.Rank}.\n`;
        }
        // call the callback function with the result
        callback(result);
      } else {
        // call the callback function with an error message
        callback('Dog breed not found.');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}



queryDogBreed('spaniels', (result) => {
  console.log(result);
});


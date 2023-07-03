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

      // input to lower case
      const lowerBreed = breed.toLowerCase();

      // use filter to get all search
      const spaniels = dogs.filter((dog) => dog.Breed.toLowerCase().includes(lowerBreed));

      if (spaniels.length > 0) {
        // create a string with all dogs and their ranks
        let result = `Here is your search for ${breed}:\n`;
        for (let spaniel of spaniels) {
          result += `${spaniel.Breed} is ranked ${spaniel.Rank}.\n`;
        }
        // callback function with result
        callback(result);
      } else {
        // callback function with error message
        callback('Dog breed not found.');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}

// Test queries
// queryDogBreed('pood', (result) => {
//   console.log(result);
// });
// queryDogBreed('alas', (result) => {
//   console.log(result);
// });
// queryDogBreed('spani', (result) => {
//   console.log(result);
// });

module.exports = {
  queryDogBreed
};

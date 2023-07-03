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

      const dog = dogs.find((dog) => dog.Breed === breed);

      if (dog) {
        // call the callback function with the result
        callback(`${dog.Breed} is ranked ${dog.Rank}.`);
      } else {
        // call the callback function with an error message
        callback('Dog breed not found.');
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}


queryDogBreed('Spaniels', (result) => {
  console.log(result);
});


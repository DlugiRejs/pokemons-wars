/*pokemonów w bazie jest 1154
po id 905 jest 10001*/

//const urlGetData = "https://pokeapi.co/api/v2/pokemon/";
//const pokemonName = "ditto";

function getRandomInt(max) {
  return Math.floor(Math.random() * max); // expected output from 0 to 1153
}

async function getPoksList() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=2000'
    );

    if (response.ok) {
      const data = await response.json(); // parses JSON response into native JavaScript objects
      return data.results;
    }

    throw new Error('getPoksList failed');
  } catch (error) {
    console.log(error.name + ': ' + error.message);
  }
}

export async function getPoks(numberofPoks) {
  let poksList = await getPoksList();
  let chosenPoks = [];
  let index = 0;

  try {
    do {
      const response = await fetch(poksList[getRandomInt(poksList.length)].url);

      if (response.ok) {
        const data = await response.json(); // parses JSON response into native JavaScript objects
        console.log('OK');
        chosenPoks[index] = data;
        index++;
      } else {
        throw new Error('getPok failed');
      }
    } while (index < numberofPoks);
  } catch (error) {
    console.log(error.name + ': ' + error.message);
  }

  return chosenPoks;
}

// Elements

const inputElement = document.querySelector(".inpt");
const displayElement = document.querySelector(".para");
const ImageElement = document.querySelector(".pokeimg");
const NameElement = document.querySelector(".pokename");

// Event Listeners

inputElement.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    FetchPokemon();
  }
});

// Fetch Poke APi

function FetchPokemon() {
  const pokename = inputElement.value.toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}/ `)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Couldn't Find Pokemon");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);

      // get name of pokemon
      const name = `${data.name.toUpperCase()}`;

      // get image of pokemon
      const sprite = `
      <image class="img1" src="${
        data.sprites.other[`official-artwork`].front_default
      }"></image>`;
      ImageElement.innerHTML = sprite;
      NameElement.innerHTML = name;

      const exp = data.base_experience;
      document.querySelector(".Experience").innerHTML = exp;

      // get pokedex data
      GetInfo(data);

      //get stats
      GetStats(data);
      
    })
    .catch((error) => {
      alert("Couldn't Find Pokemon, Try Again");
    });
}

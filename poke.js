// Elements

const inputElement = document.querySelector(".inpt");
const displayElement = document.querySelector(".para");
const ImageElement = document.querySelector(".pokeimg");
const NameElement = document.querySelector(".pokename");
const IdElement = document.querySelector(".id");
const typeElement = document.querySelector(".type");
const pokeheightElement = document.querySelector(".height");
const pokeweightElement = document.querySelector(".weight");
const abilityinfo = document.querySelector(".ability");

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
      const name = `${data.name.toUpperCase()}`;

      const sprite = `
      <image class="img" src="${
        data.sprites.other[`official-artwork`].front_default
      }"></image>`;
      ImageElement.innerHTML = sprite;
      NameElement.innerHTML = name;
      GetInfo(data);
      // GetMoves(data);
    })
    .catch((error) => {
      alert("Couldn't Find Pokemon, Try Again");
    });
}

// functions

function GetInfo(data) {
  const id = data.id;
  IdElement.innerHTML = id;
  const type = capitalize(data.types[0].type.name);
  typeElement.innerHTML = type;
  const ht = data.height / 10;
  pokeheightElement.innerHTML = ht + " m";
  const wt = data.weight / 10;
  pokeweightElement.innerHTML = wt + " kg";
  const ab = data.abilities;
  abilityinfo.innerHTML = "";
  ab.forEach((value) => {
    const ability = capitalize(value.ability.name);
    console.log(value);
    abilityinfo.innerHTML += `<div style="margin-top: 5px">${ability}</div>`;
  });
}
function GetMoves(data) {
  displayElement.innerHTML = `<h2>Moves</h2>`;
  for (let i = 0; i < 4; i++) {
    const move = `${i + 1}. ${data.moves[i].move.name.toUpperCase()}<br>`;
    displayElement.innerHTML += move;
  }
}

// function to capitalize first letter

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

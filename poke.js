const inputElement = document.querySelector(".inpt");
const displayElement = document.querySelector(".para");
const ImageElement = document.querySelector(".pokeimg");
const NameElement = document.querySelector(".pokename");

inputElement.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    FetchPokemon();
  }
});

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
      const name = `<h4 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${data.name.toUpperCase()}</h4>`;

      const sprite = `
      <image class="img" src="${
        data.sprites.other[`official-artwork`].front_default
      }"></image>`;
      ImageElement.innerHTML = sprite;
      NameElement.innerHTML = name;
      GetMoves(data);
    })
    .catch((error) => {
      alert("Couldn't Find Pokemon, Try Again");
    });
}

function GetMoves(data) {
  displayElement.innerHTML = `<h2>Moves</h2>`;
  for (let i = 0; i < 4; i++) {
    const move = `${i + 1}. ${data.moves[i].move.name.toUpperCase()}<br>`;
    displayElement.innerHTML += move;
  }
}


const IdElement = document.querySelector(".id");
const typeElement = document.querySelector(".type");
const pokeheightElement = document.querySelector(".height");
const pokeweightElement = document.querySelector(".weight");
const abilityinfo = document.querySelector(".ability");
const funfact = document.querySelector(".fact");

// functions

function GetInfo(data) {
  const id = data.id;
  IdElement.innerHTML = id;
  const type = capitalize(data.types[0].type.name);
  typeback(type);
  typeElement.innerHTML = type;
  const ht = data.height / 10;
  pokeheightElement.innerHTML = ht + " m";
  const wt = data.weight / 10;
  pokeweightElement.innerHTML = wt + " kg";
  const ab = data.abilities;
  abilityinfo.innerHTML = "";
  ab.forEach((value) => {
    const ability = capitalize(value.ability.name);
    abilityinfo.innerHTML += `<div style="margin-top: 5px">${ability}</div>`;
  });

  inputElement.value = "";
  const species_url = data.species.url;
  getspecies(species_url);
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

// function  to decide background of type

function typeback(type) {
  if (type === "Fire") {
    typeElement.style.backgroundColor = "#f42";
  } else if (type === "Water") {
    typeElement.style.backgroundColor = "#39f";
  } else if (type === "Ghost") {
    typeElement.style.backgroundColor = "#66b";
  } else if (type === "Normal") {
    typeElement.style.backgroundColor = "#aa9";
  } else if (type === "Electric") {
    typeElement.style.backgroundColor = "#fc3";
  } else if (type === "Dark") {
    typeElement.style.backgroundColor = "#754";
  }
}

// function to get species information

function getspecies(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Couldn't Find Pokemon");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      var fact, shape;
      console.log(data); //Information about species as a JSON string
      const rand = Math.random() * 10; //calculate random number to select fact from fact list
      try{
      fact = data.flavor_text_entries[Math.round(rand)].flavor_text; 
      }
      catch(err)
      {
        fact = data.flavor_text_entries[0].flavor_text;
        console.log(err);
      }//rounding up the number and fetching fact from array
      funfact.innerHTML = `${fact}`; //updating fact paragraph

      //getting information for second column
      const growth = data.growth_rate.name;
      document.querySelector(".growth_rate").innerHTML = capitalize(growth);

try{
      shape = data.shape.name;
}
catch(err)
{
  shape="-";
}
      document.querySelector(".shape").innerHTML = capitalize(shape);
    })
    .catch((error) => {
      alert("Couldn't Find Pokemon, Try Again");
    });
}

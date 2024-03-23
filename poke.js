const inputElement=document.querySelector(".inpt");
const displayElement=document.querySelector(".para");
const ImageElement=document.querySelector(".pokeimg");

inputElement.addEventListener('keydown', (event)=>{
    if(event.key=='Enter')
    {
        FetchPokemon();
    }
})

function FetchPokemon()
{
    const pokename=inputElement.value.toLowerCase();
fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
.then((response)=>{
    if(!response.ok)
    {
        throw new Error("Couldn't Find Pokemon");
    }
    else{
        return response.json();
    }
}).then((data)=>{
     GetMoves(data);
    const sprite=`<image src="${data.sprites.front_default}"></image>
    <h4 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${data.name.toUpperCase()}</h4>`;
    ImageElement.innerHTML=sprite;
})
.catch((error)=>{
    alert("Couldn't Find Pokemon, Try Again");
});
}

function GetMoves(data){
    let list=[];

    for(let i=0; i<4; i++)
    {
        list.push(data.moves[i].move.name);
        
    }
    displayElement.innerHTML=list;
    
    
}
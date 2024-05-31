console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);
// =============================

// select ul from the page
const cardsUl = document.querySelector(".cards");
// going through the data of pokemon
for (let i = 0; i < data.length; i++) {
  const pokemon = data[i];

  // create a li with the pokemnon name
  const cardLi = document.createElement("li");
  // li.textContent = pokemon.name;
  cardLi.classList.add("card");
  cardsUl.appendChild(cardLi);
  // create h2 with class card-title
  const h2 = document.createElement("h2");
  h2.textContent = pokemon.name;
  cardLi.appendChild(h2);
  //  Create img element with class name card--img
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.classList.add("card--img");
  cardLi.appendChild(img);
  // create UL with card--text
  const cardTextUl = document.createElement("ul");
  cardTextUl.classList.add("card-text");
  cardLi.appendChild(cardTextUl);

  // select cardTxtUl
 
  let HP
  const stats = pokemon.stats;
  
  for (let j = 0 ; j < stats.length; j++) {
    // cardTextUl.appendChild(li);
    const li = document.createElement("li");
      HP = stats[j].base_stat;
    li.textContent = 'HP: ' + HP
    cardLi.appendChild(li)
    }
}

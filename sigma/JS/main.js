import '../css/style.css'
import {pokemon} from "../JS/items.js"

const DOMSelectors = 
{
        button: document.querySelector(".switch input"),
        container: document.querySelector(".container"),
        form: document.querySelector("form"),
        min:document.querySelector(".min"),
        max:document.querySelector(".max"),
        submit:document.querySelector(".submit"),
        input_list:document.querySelectorAll(`.type_list input[type="checkbox"]`)
}

pokemon.forEach(stats=>
  {
      DOMSelectors.container.insertAdjacentHTML(
          "afterbegin",
          `<div class="card" id="${stats["name"]}">
            <h2 class="card_header">${stats["name"]}</h2>
            <img src="${stats["photos"]}" alt="${stats["name"]}" class="card_img">
            <h2 class="card_header">Type : ${stats["type"]}</h2>
            <h2 class="card_header">Evolution : ${stats["evolution"]}</h2> 
            <h2 class="card_header">Weight : ${stats["weight"]} kg</h2> 
          </div>`
      );
  }
)

function get_type_list_values(){
    let type_true = []  
    DOMSelectors.input_list.forEach(input=>{
      if(input.checked)
        {
          type_true.push(input.className)
        }
    });
    return type_true;
}
DOMSelectors.submit.addEventListener("click", function(event)
{
    event.preventDefault();
    const typeSelected = get_type_list_values();
    const min =  parseFloat(DOMSelectors.min.value);
    const max =  parseFloat(DOMSelectors.max.value);
    if(min >=max)
    {
      alert("min must be less than max");
      return;
    }
    if(isNaN(min) || isNaN(max))
    {
      alert("enter valid input");
      return;
    }
    const range =  [min,max]
    filter(range, typeSelected);
})

DOMSelectors.input_list.forEach(input=>{
  input.addEventListener("change", function(event)
  {
    const img = input.nextElementSibling;
    if(input.checked)
      {
        img.classList.add("checked");
      }
    else
    {
      img.classList.remove("checked");
    }
  })
}
)
function filter(weight_range, types){
  const scores = pokemon.map(poke =>
    {
       let valueTruth=0;
       if(poke["weight"]<weight_range[1]&&poke["weight"]>weight_range[0])
       { 
        valueTruth+=5
       }
       const type_match = types.filter(type=>poke.type.includes(type)).length;
        valueTruth+= type_match*5;
       return{name:poke.name,score:valueTruth};
    });
  scores.sort((a,b)=>b.score-a.score)
  scores.forEach((poke, index)=>
  {
    const card = document.querySelector(`#${poke.name}`);
    card.style.order = index;
  }
  )
}
DOMSelectors.container.addEventListener("click", function (event) {
  const element_selected = event.target.closest(".card");
  if (!element_selected) return; 
  const handleMouseDown = () => {
    const message = document.createElement("div");
    message.className = "delete-message";
    message.innerText = "Hold down for 2 seconds to delete";
    DOMSelectors.container.appendChild(message);
    message.style.position = "absolute";
    message.style.top = `${element_selected.getBoundingClientRect().top}px`;
    message.style.left = `${element_selected.getBoundingClientRect().left}px`;

    const ItemFadeOut = setTimeout(() => {
      const allmessages = document.querySelectorAll(".delete-message");
      allmessages.forEach((message) => 
        message.classList.add("fade-out"),
        message.remove());
    }, 1000);

    element_selected.classList.add("holding");
    const animations = [
      { time: 500, animation: "shaking 0.25s infinite" },
      { time: 1000, animation: "shaking 0.125s infinite" },
      { time: 1500, animation: "shaking 0.09s infinite" },
    ];

    const timers = animations.map(({ time, animation }) =>
      setTimeout(() => (element_selected.style.animation = animation), time)
    );

    const deleteElement = setTimeout(() => {
      element_selected.remove();
    }, 2000);

    const clearTimers = () => {
      timers.forEach(clearTimeout);
      clearTimeout(deleteElement);
      element_selected.classList.remove("holding");
      element_selected.style.animation = "";
    };

    element_selected.addEventListener("mouseleave", clearTimers);
    element_selected.addEventListener("mouseup", clearTimers);
  };
 
  element_selected.addEventListener("mousedown", handleMouseDown, {
    once: true,
  });
});

DOMSelectors.button.addEventListener("change", function(event)
{
    const body =  document.querySelector("body")
    const slider =  document.querySelector(".slider")
    if(body.classList.contains("dark")){
        body.classList.add("light")
        body.classList.remove("dark")
        slider.classList.add("activeon")
        slider.classList.remove("activeoff")

    }
    else if(body.classList.contains("light"))
    {
        body.classList.remove("light")
        body.classList.add("dark")
        slider.classList.remove("activeon")
        slider.classList.add("activeoff")
      }
    }
)

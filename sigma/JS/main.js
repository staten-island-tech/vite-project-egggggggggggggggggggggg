import '../css/style.css'
import {pokemon} from "../JS/items.js"
console.log(pokemon);
let drag =  false;
const DOMSelectors = 
{
        button: document.querySelector(".switch input"),
        container: document.querySelector(".container"),
        form: document.querySelector("form"),
        menu_pic: document.querySelector(".menu_pic"),
        menu: document.querySelector(".menu_bar"),
        weight_options: document.querySelector(".weight_options"),
        slider_min:document.querySelector(".slider_min"),
        slider_max:document.querySelector(".slider_max"),
        slider_bar:document.querySelector(".slider_bar"),
        slider_fill_in:document.querySelector(".slider_fill_in"),
        circle:document.querySelector(".circle"),

}
//Make sure it picks the right circle(closest) cursor position must be directly on top of the circle 
//Make it so the max and min(vice versa) do not ever meet and cause problems (add a range of possible value)
//
//Make so it only change X positon (hori)
//Get cursor current X position
//Make sure its within range of set range, if not set it to either min or max Accomplish with mousemove/other function
//Set the current position of it based off the style.left propety 
//take original circle position and subtract it from the determined position of the cursor. then add that difference to the style.left propety
function filter(weight_range, type, evolution){
  let arrayValue =  []
  pokemon.forEach(poke=> {
    
    if(weight_range in poke)
      {
        
      }
    if(type in poke)
      {

      }
    if(evolution in poke)
      {

      }
  })
  
}


let initXvalue = 0;
let originalLEFT= 0;
DOMSelectors.circle.addEventListener("mousedown", function(event){        
    drag=true;
    initXvalue = event.clientX;
    console.log("old initXvalue",initXvalue);
    console.log("STARTED DRAGGING")
    originalLEFT = parseFloat(DOMSelectors.circle.style.left||0);

})

document.addEventListener("mousemove",function(event){
    if(drag){
      console.log(initXvalue, originalLEFT);
      const difference = event.clientX - initXvalue; 
      console.log(DOMSelectors.circle.style.left,"style.left", DOMSelectors.circle.getBoundingClientRect().left,"getBoundLeft", initXvalue, "initXvalue")
      if(parseFloat(DOMSelectors.circle.style.left)<0){
        DOMSelectors.circle.style.left = "0px";
      }
      else
      {
        DOMSelectors.circle.style.left = `${originalLEFT+difference}px`;
      }
     }  
  }
)
DOMSelectors.circle.addEventListener("mouseup", function(event){
  drag=false;  
  console.log("new initXvalue",initXvalue)
  console.log("LEFT THE DRAG")
})
//Type Check
//When the checkbox is checked underlay an element under the circle picture to create the illusion of it being selected
//Keep track of the input values to utilize for searching. 

//Evolution Check
//Might be a dropdown menu or checkboxes
//Utilize the same idea as before where place priority on certain evolutions etc


//First searches for weight that matches range, then goes for the Type Check and then evolution check. 
//If none of the pokemon match all the conditons search for the one that is closest to the conditions set. 
console.log(DOMSelectors.menu)
pokemon.forEach(stats=>
    {
        DOMSelectors.container.insertAdjacentHTML(
            "afterbegin",
            `<div class="card">
              <h2 class="card_header">${stats["name"]}</h2>
              <img src="${stats["photos"]}" alt="${stats["name"]}" class="card_img">
              <h2 class="card_header">Type : ${stats["type"]}</h2>
              <h2 class="card_header">Evolution : ${stats["evolution"]}</h2> 
              <h2 class="card_header">Weight : ${stats["weight"]} kg</h2> 
            </div>`
          );
    }
)


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
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector(".Name").value;
    const image = document.querySelector(".IMAGE_URL").value;
    if(!name||!image){
        console.log("INPUT SOMETHING")
    }
    
    
})
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

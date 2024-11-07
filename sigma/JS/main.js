import '../css/style.css'
import {pokemon} from "../JS/items.js"
console.log(pokemon);
const DOMSelectors = 
{
        button: document.querySelector(".switch input"),
        container: document.querySelector(".container"),
        form: document.querySelector("form"),
        menu_pic: document.querySelector(".menu_pic"),
        menu: document.querySelector(".menu_bar")
}
console.log(DOMSelectors.menu)
DOMSelectors.menu.addEventListener("click",
  function()
    {
      DOMSelectors.menu.style.backgroundColor = "white"

    }
)
pokemon.forEach(stats=>
    {
        DOMSelectors.container.insertAdjacentHTML(
            "afterbegin",
            `<div class="card">
              <h2 class="card_header">${stats["name"]}</h2>
              <img src="${stats["photos"]}" alt="${stats["name"]}" class="card_img">
              <h2 class="card_header">${stats["type"]}</h2>
              <h2 class="card_header">${stats["evolution"]}</h2> 
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

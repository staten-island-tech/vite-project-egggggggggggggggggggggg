import '../css/style.css'
const DOMselectors = 
{
        button: document.querySelector(".switch input")

}
DOMselectors.button.addEventListener("change", function(event)
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

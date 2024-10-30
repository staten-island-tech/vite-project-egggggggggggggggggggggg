import '../css/style.css'
const DOMselectors = 
{
        button: document.querySelector(".switch input")

}
DOMselectors.button.addEventListener("change", function(event)
{
    const body =  document.querySelector("body")
    if(body.classList.contains("dark")){
        body.classList.add("light")
        body.classList.remove("dark")
    }
    else if(body.classList.contains("light"))
    {
        body.classList.remove("light")
        body.classList.add("dark")
    }

} )
let drag =  false;
const DOMSelectors = 
{
        button: document.querySelector(".switch input"),
        container: document.querySelector(".container"),
        form: document.querySelector("form"),
        weight_options: document.querySelector(".weight_options"),
        slider_min:document.querySelector(".slider_min"),
        slider_max:document.querySelector(".slider_max"),
        slider_bar:document.querySelector(".slider_bar"),
        slider_fill_in:document.querySelector(".slider_fill_in"),
        circle : document.querySelector(".circle"),
}
let initXvalue = 0;
let originalLEFT=0;
//Trigger this when mousedown occurs aka when clicked
function intializeEvent(item){
    drag=true;
    initXvalue = item.clientX;
    originalLEFT =  parseFloat(DOMSelectors.circle.style.left||0)
    changePosition(item);
    console.log(item)
}

//Move to here when initializeEvent has occured
function changePosition(item){
    document.addEventListener("mousemove",function(event)
    {
        const item_target = item.target;
        if(drag){
            const difference =  event.clientX-initXvalue;
            const currentLeft = parseFloat(item_target.style.left);
            if((currentLeft<0 || currentLeft>100))
            {
                console.log("range not exceeded/both positions do not equal each other")
                if(item_target=="slider_min")
                {
                    item_target.style.left="0px";
                }
                else if(item_target=="slider_max")
                {
                    item_target.style.left="100px";
                }
                drag=false;
            }//Checks to prevent position of circle from going too far left or too far right and also makes sure they dont end up in same position
            else
            {
                item_target.style.left = `${originalLEFT+difference}px`;
            }}
    })
}
function endDrag()
{
    drag=false;
}
document.querySelectorAll('.circle').forEach(circle =>{circle.addEventListener("mousedown",event => intializeEvent(event))});
document.querySelectorAll('.circle').forEach(circle =>{circle.addEventListener("mouseup", endDrag())});
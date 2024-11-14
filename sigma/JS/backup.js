let initXvalue = 0;
let originalLEFT= 0;

function getInitialValue(item)
{
  drag=true;
  initXvalue=event.clientX;

}
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
        DOMSelectors.circle.style.left = "0";
        drag=false;
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
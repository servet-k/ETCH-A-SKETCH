
const row=document.querySelector(".slider").value; // get value from slider

//document.querySelector(".container").style.setProperty("grid-template-rows", `repeat(${row},1fr)`); 
//document.querySelector(".container").style.setProperty("grid-template-columns", `repeat(${row},1fr)`);

//create row*row grid square divs
function grid(size){
for (let i=1;i<=size**2;i++){
    const div=document.createElement("div");
    div.setAttribute("class","cell" )
    document.querySelector(".container").appendChild(div);
}

document.querySelector(".container").style.gridTemplateRows = `repeat(${size}, 1fr)`;
document.querySelector(".container").style.gridTemplateColumns = `repeat(${size}, 1fr)`;


document.querySelectorAll(".cell").forEach(item=> {
    item.addEventListener("mouseover",(e)=>{
        e.target.style.backgroundColor="black";
    })
})
}
//clear grid area back to white
function reset(){
    document.querySelectorAll(".cell").forEach(item=>{
        item.style.backgroundColor="white";
    })
}

// remove grid area before building new one according to user slider choice
function clear(){
    document.querySelectorAll(".cell").forEach(item=>item.remove())

    }

grid(row);
function getValue(x){
  clear();
  grid(x);
  document.querySelector(".sld-value").innerHTML=`${x}x${x}`;
}
let div;
let row=16;
let column=16;

for (let i=1;i<=row*column;i++){
    div=document.createElement("div");
    div.setAttribute("class","cell" )
    document.querySelector(".container").appendChild(div);
}

document.querySelectorAll(".cell").forEach(item=> {
    item.addEventListener("mouseover",(e)=>{
        e.target.style.backgroundColor="black";
    })
})
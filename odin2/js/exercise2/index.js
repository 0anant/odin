function deleteMe(){
    

}

function addItem(){

const val = document.querySelector("input").value;
const newPara = document.createElement("p");
const buttn  = document.createElement("button");
buttn.textContent = "Delete";
buttn.addEventListener("onclick=deleteMe()");
newPara.textContent = val;
newPara.setAttribute(onclick, deleteMe());
const container = document.querySelector("#container");
container.appendChild(newPara);

}

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!"

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I'm red!";
para.style.color = 'red';
container.appendChild(para);

const headline_3 = document.createElement("h3");
headline_3.textContent = "I'm a blue h3!";
headline_3.style.color = "blue";
container.appendChild(headline_3);

const content_2 = document.createElement("div");
content_2.classList.add("cotainer_div");
content_2.style.border = "black";
content_2.style.backgroundColor = "pink";

const headLine_1 = document.createElement("h1");
headLine_1.textContent = "I'm in a div";

const para_2 = document.createElement("p");
para_2.textContent = "ME TOO!!";
para_2.style.color = "black";



content_2.appendChild(headLine_1);
content_2.appendChild(para_2);

container.appendChild(content_2);


function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn =document.querySelector("#btn");

btn.addEventListener("click", alertFunction);
btn.addEventListener("click", function(e){
    e.target.style.background = "blue";
});




const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.padding = "20px";
  section.style.backgroundColor = "lightblue";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "14px";
  section.style.border = "6px solid green";
}

// for(const section of sections){
//     section.classList.add('section-card')
// }

// first create an element and set innerText or innerHTML
const newElement = document.createElement("li");
newElement.innerText = "ami hobo sokal belar pakhi";

// find the parent where you will add the child or newElement
const foodList = document.getElementById("food-list");
foodList.appendChild(newElement);

const parent = document.querySelector("body");
const newSection = document.createElement("section");
newSection.innerHTML = `
<h1>My Title</h1>
<ul>
<li> Hero</li>
<li> Boss</li>
<li> Dominator</li>
</ul>`;
parent.append(newSection);

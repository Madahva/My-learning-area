const page = document.querySelector("main");
const input = document.querySelector("#input");
const inputBtn = document.querySelector("button");

const list = document.createElement("ul");

inputBtn.addEventListener("click", (event) => event.preventDefault());


inputBtn.onclick = () =>{

    if(input.value.trim()){

        const inputText = input.value;
        
        const listItem = document.createElement("li");
        const textItem = document.createElement("span");
        const deleteBtn = document.createElement("button");

        textItem.classList.add("list__item-text");

        textItem.textContent = inputText;
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => listItem.remove());

        listItem.appendChild(textItem);
        listItem.appendChild(deleteBtn);
        page.appendChild(list).appendChild(listItem);
    }
    input.focus();
    input.value = "";
};
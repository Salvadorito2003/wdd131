const input = document.querySelector("#favchapter");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");


button.addEventListener("click", function(){
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");


        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);


        deleteButton.addEventListener("click", function(){
        list.removeChild(li);
        input.focus();
        })


        input.value = "";
        input.focus();
    } else {
        console.log("Empty.")
    }
    
});


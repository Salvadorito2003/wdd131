const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");

button.addEventListener("click", function(){
    if (input.value.trim() == '') {
        print("Empty field.")
    } else {
        li.textContent = input.value;
        deleteButton.textContent = "X";
        li.append(deleteButton);
        list.append(li);
    }
});
deleteButton.addEventListener("click", function(){
    list.removeChild(li);
    input.focus();
})
input.value = "";
input.focus();
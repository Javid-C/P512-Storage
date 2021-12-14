let input = document.querySelector(".todoList");
let list = document.querySelector(".list");

input.addEventListener("keyup", function (e) {
  if (e.keyCode == 13 && this.value.trim()) {
    let li = document.createElement("li");
    let icon = document.createElement("i");
    icon.className = "far fa-trash-alt";
    icon.style.cursor = "pointer";
    li.innerText = this.value;
    li.className =
      "list-unstyled mt-2 list-group-item d-flex justify-content-between align-items-center text-danger fa-2x";
    li.appendChild(icon);
    list.appendChild(li);
    icon.addEventListener("click", function () {
      let permission = confirm(
        `Are you sure delete this text: ${li.innerText}`
      );
      if (permission) {
        li.remove();
      }
    });

    this.value = "";
  }
});

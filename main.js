console.clear()
let target = document.querySelector(".button");
let modal = document.querySelector(".modal");
let but = document.querySelector(".but");

target.addEventListener("click", showModal)

function showModal(){
    modal.classList.toggle("on");
}

but.addEventListener("click", hideModal);

function hideModal(){
    modal.classList.toggle("on");
}
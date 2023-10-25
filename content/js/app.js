const title = document.querySelector(".title");
const ul = document.querySelector("ul");
const btnReload = document.querySelector(".reload");

window.onload = () =>{
    if(window.navigator.onLine){
        onLine()
    }else{
        offLine()
    }
}

window.addEventListener("online", () =>{
    onLine()
})
window.addEventListener("offline", () =>{
    offLine()
})

btnReload.addEventListener("click", () =>{
    window.location.reload()
})
function onLine() {
    title.textContent = "Online Now";
    title.style.color = "#248900";
    ul.classList.add("hide");
    btnReload.classList.add("hide");
}


function offLine() {
    title.textContent = "Offline Now";
    title.style.color = "#5b5b5b";
    ul.classList.remove("hide");
    btnReload.classList.remove("hide");
}
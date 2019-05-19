
let event = document.getElementById("modal-container");
let go = document.getElementById("cancel");



let button1 = document.querySelectorAll('#reserve');

    for (let a = 0; a < button1.length; a++) {    
        button1[a].addEventListener('click', work);
    }

go.addEventListener("click", cancel);



function work(){
    event.style.display = "block"
}

function cancel(){
    event.style.display = "none";
}
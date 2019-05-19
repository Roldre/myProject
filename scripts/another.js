
let text = document.getElementById("commentText")
let all = document.querySelectorAll("#click")
let texter = document.querySelectorAll("#section")
for(let i=0; i<all.length;i++){

    all[i].addEventListener("click",toggle)
  
function toggle(){
if(texter[i].style.display == "none"){
texter[i].style.display ="block"

}
else{
    texter[i].style.display = "none"
}
}
}


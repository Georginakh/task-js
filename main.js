var font = document.querySelector("div");
var changefontbtn = document.querySelector(".changefontbtn")

function changefont(){
    font.classList.toggle("fontsize");
}


changefontbtn.onclick = changefont;
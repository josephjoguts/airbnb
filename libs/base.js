let button = document.getElementById("ttt")
button.addEventListener("click",()=>changeIt(),false)
function changeIt(){
    let t =document.createElement("div")
    t.innerHTML+="<p class='t'>dfgdfgdfgdfgdfg</p>"
    button.before(t)
    button.style.width ="20em"
    button.style.height="20em"
    button.setAttribute("content","licked")
    button.textContent="dfgdfgdfgdfgdfgvdfdfg"
    button.style.textDecorationColor="#123456"
    button.style.textDecoration.fontsize(21);
    button.appendChild(document.createTextNode('test value'));
}
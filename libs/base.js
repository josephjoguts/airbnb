let custom_selects = document.querySelectorAll(".custom-select");
for(custom_select of custom_selects) {
    let shown = document.createElement("div");
    shown.setAttribute("class", "select");
    let t = custom_select.querySelector("select")
    shown.innerHTML = `<p>${t.options[t.selectedIndex].value}</p><img src="images/footer/arrow.svg">`
    custom_select.appendChild(shown);
    let itemList = document.createElement("div");
    if(custom_select.querySelector("select").classList.contains("language")){
        itemList.style.zIndex = 11;
    }
    itemList.setAttribute("class", "itemList");
    for (let i = 1; i < t.length; i++) {
        let p = document.createElement("p")
        p.onclick = function (e) {

            let change = shown.querySelector("p").innerHTML;
            shown.querySelector("p").innerHTML = p.innerHTML;
            itemList.classList.toggle("closed")
            p.innerHTML = change;
            shown.click()
        }
        p.innerHTML = t.options[i].value;
        itemList.append(p);
    }
    itemList.classList.add("closed");
    shown.append(itemList);
    shown.onclick = function (e) {
        itemList.classList.toggle("closed")
    }
}
function close_selects(e){
    if(!e.target.closest("div").classList.contains("select")){
        for(select of document.querySelectorAll(".itemList")){
            if(!select.classList.contains("closed")){
                select.classList.add("closed")
            }
        }
    }
}
document.addEventListener("click",function (e){
    close_selects(e);
})
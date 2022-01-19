const button_menu= document.getElementById("menu")
const button_close=document.getElementById("close")
const modal = document.querySelector(".modal")


button_close.addEventListener("click",()=>{
    modal.classList.remove("visible")
    modal.classList.add("hiden")})


button_menu.addEventListener("click",()=>{
    modal.classList.remove("hiden")
    modal.classList.add("visible")
})



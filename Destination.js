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

const change_home= document.getElementById("home")
const change_destination= document.getElementById("destination")
const change_crew= document.getElementById("crew")
const change_technology= document.getElementById("technology")

change_home.addEventListener("click",()=>{
    window.location.assign("/Index.html")
})

change_destination.addEventListener("click",()=>{
    window.location.assign("/Destination.html")
})

change_crew.addEventListener("click",()=>{
    window.location.assign("/Crew.html")
})

change_technology.addEventListener("click",()=>{
    window.location.assign("/Technology.html")
})


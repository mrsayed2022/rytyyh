console.log("sayed")
let h1=document.getElementById("h")
let i=1
let mn=()=>{
let title="Eng-SAYED MOHAMED";
h1.innerText=title.slice(0 ,i)
i++
if (title.length<i) {
    i=1
}
}
setInterval(mn ,1000)





let nav=document.querySelector(".nav")
 let h=document.getElementById("h")
window.onscroll = function () {
    console.log(this.scrollY)
    if (this.scrollY >= 600) {
    nav.classList.add("navv")

    }else{
        nav.classList.remove("navv")

    }

}

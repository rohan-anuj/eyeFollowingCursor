
const image=document.getElementsByTagName("img")
const leftEye=document.getElementById("leftEye")
const rightEye=document.getElementById("rightEye")

document.addEventListener("mousemove",(e)=>{
    let x=e.clientX*18/window.innerWidth+"px"
    let y=e.clientY*18/window.innerHeight+"px"
console.log(e.clientX*16)
console.log("windowinner"+window.innerWidth)
    image[0].style.left=e.clientX+40+"px"
    image[0].style.top=e.clientY+40+"px"
    leftEye.style.left=x
    rightEye.style.left=x    
    leftEye.style.top=y
    rightEye.style.top=y
})

// declaration
let btn1= document.querySelector(".btn1");
let btn2= document.querySelector(".btn2");
let bulb= document.querySelector(".bulb");

// on click function

btn1.addEventListener("click", function () {
    bulb.src= "bulb-image/pic_bulbon.gif";
})
btn2.addEventListener("click", function () {
    bulb.src= "bulb-image/pic_bulboff.gif";
})
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function openDATOS() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = "#e7a428";
    btn2.style.color = "#000";
    btn3.style.color = "#000";
    content1.style.transitionDelay ="0.3s";
    content2.style.transitionDelay ="0s";
    content3.style.transitionDelay ="0s";
}
function openSUMILLA() {
    content1.style.transform = "translateX(200%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    btn2.style.color = "#e7a428";
    btn1.style.color = "#000";
    btn3.style.color = "#000";
    content1.style.transitionDelay ="0s";
    content2.style.transitionDelay ="0.3s";
    content3.style.transitionDelay ="0s";
}
function openOBJETIVO() {
    content1.style.transform = "translateX(200%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    btn3.style.color = "#e7a428";
    btn2.style.color = "#000";
    btn1.style.color = "#000";
    content1.style.transitionDelay ="0s";
    content2.style.transitionDelay ="0s";
    content3.style.transitionDelay ="0.3s";
}
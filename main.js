// menu box
const menuBox = document.querySelector(".menu-box");
const listMenu = document.querySelector(".list-menu");
const closeIcon = document.querySelector(".close-menu");
const menuLink = document.querySelector(".menu");
 
 listMenu.onclick = () =>{
 	menuBox.classList.add("active");
 	listMenu.classList.add("active");
 	menuLink.classList.add("active");
 	closeIcon.classList.add("active");
 }
 closeIcon.onclick = () =>{
 	menuBox.classList.remove("active");
 	listMenu.classList.remove("active");
 	menuLink.classList.remove("active");
 	closeIcon.classList.remove("active");
 }

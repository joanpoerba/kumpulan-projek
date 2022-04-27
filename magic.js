let toggle = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar");

toggle.onclick = function(){
    sidebar.classList.toggle("move");
}
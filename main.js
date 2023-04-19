const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;
const header = document.header;

toggleBtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode")
    
})

toggleBtn.addEventListener("click", function(){
    header.classList.toggle("dark-mode")
})
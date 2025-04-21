function changeHeading(){
    const heading = document.getElementById("myHeading");
    heading.textContent = "Heading Changed";
    heading.style.color = "blue";
}
function toggleMOde(){
    const body =document.getElementById("pageBody");
    body.classList.toggle("dark-mode");
}
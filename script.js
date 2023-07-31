function navegar() {
    
    var tech1 = document.getElementById("uno");
    var tech2 = document.getElementById("dos");
    var tech3 = document.getElementById("tres");

    if (tech1.checked){
        window.location.href = "technology-capsule.html";
        tech1.classList.add("selected");
        tech2.classList.remove("selected");
        tech3.classList.remove("selected");

}else if (tech2.checked) {
    window.location.href = "technology-spaceport.html";
    tech2.classList.add("selected");
  tech1.classList.remove("selected");
  tech3.classList.remove("selected");
}
else if (tech3.checked) {
    window.location.href = "technology-vehicle.html";
    tech3.classList.add("selected");
    tech2.classList.remove("selected");
    tech1.classList.remove("selected");
  }}

function navegar() {
    var pagina1crew = document.getElementById("pagina1");
    var pagina2crew = document.getElementById("pagina2");
    var pagina3crew = document.getElementById("pagina3");
    var pagina4crew = document.getElementById("pagina4");
     
    /*desktop*/ 
    var pagina1crew = document.getElementById("pagina01");
    var pagina2crew = document.getElementById("pagina02");
    var pagina3crew = document.getElementById("pagina03");
    var pagina4crew = document.getElementById("pagina04");

  
    if (pagina1crew.checked){
      window.location.href = "crew1.html";
      pagina2crew.classList.remove("selected");
    pagina3crew.classList.remove("selected");
    pagina4crew.classList.remove("selected");
    pagina1crew.classList.add("selected");


    } else if (pagina2crew.checked) {
      window.location.href = "crew2.html";
      pagina2crew.classList.add("selected");
    pagina3crew.classList.remove("selected");
    pagina1crew.classList.remove("selected");
    pagina4crew.classList.remove("selected");

    } else if (pagina3crew.checked) {
      window.location.href = "crew3.html";
      pagina2crew.classList.remove("selected");
      pagina1crew.classList.remove("selected");
      pagina4crew.classList.remove("selected");
    pagina3crew.classList.add("selected");
    }
    else if (pagina4crew.checked) {
      window.location.href = "crew4.html";
      pagina1crew.classList.remove("selected");
      pagina2crew.classList.remove("selected");
    pagina3crew.classList.remove("selected");
    pagina4crew.classList.add("selected");
    }
  }
  
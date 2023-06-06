function navegar() {
    
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

    /**para desktop */

    var pagina1crewd = document.getElementById("pagina-uno");
    var pagina2crewd = document.getElementById("pagina-dos");
    var pagina3crewd = document.getElementById("pagina-tres");
    var pagina4crewd = document.getElementById("pagina-cuatro");

    if (pagina1crewd.checked){
      window.location.href = "crew1.html";
      pagina2crewd.classList.remove("selected");
    pagina3crewd.classList.remove("selected");
    pagina4crewd.classList.remove("selected");
    pagina1crewd.classList.add("selected");


    } else if (pagina2crewd.checked) {
      window.location.href = "crew2.html";
      pagina2crewd.classList.add("selected");
    pagina3crewd.classList.remove("selected");
    pagina1crewd.classList.remove("selected");
    pagina4crewd.classList.remove("selected");

    } else if (pagina3crewd.checked) {
      window.location.href = "crew3.html";
      pagina2crewd.classList.remove("selected");
      pagina1crewd.classList.remove("selected");
      pagina4crewd.classList.remove("selected");
    pagina3crewd.classList.add("selected");
    }
    else if (pagina4crewd.checked) {
      window.location.href = "crew4.html";
      pagina1crewd.classList.remove("selected");
      pagina2crewd.classList.remove("selected");
    pagina3crewd.classList.remove("selected");
    pagina4crewd.classList.add("selected");
    }
  }
  
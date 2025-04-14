function iniciar() {
    const usuario = document.getElementById("usuario").value.toLowerCase();
    const contrasena = document.getElementById("contrasena").value;
    if (usuario === "karen" && contrasena === "30122024") {
      window.location.href = "sorpresa.html";
    } else {
      alert("¡Ups! Eso no es correcto, intenta de nuevo 🙄💕");
    }
  }
  
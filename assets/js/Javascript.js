var ul = document.getElementsByClassName("listul")[0]
var check = document.getElementById("checkmenu")
var header = document.getElementsByTagName("header")[0]
var lastli = document.getElementById("lastli")


check.addEventListener("click", () =>{
  if (check.checked == true) {
    document.getElementById("membrete").style.display = "none"
    document.getElementById("Logo").style.marginTop = "30px"
    document.getElementsByClassName("checki")[0].style.marginTop = "0px"
} else{
  document.getElementById("membrete").style.display = "block"
  document.getElementById("Logo").style.marginTop = "0px"
  document.getElementsByClassName("checki")[0].style.marginTop = "-20px"
}


})


if (document.title == "Inicio"){
  document.getElementById("next").value = window.location.href

  function ScrollInfo() {
    if (document.getElementById("checkmenu").checked == true) {
      document.getElementById("checkmenu").checked = false
    }
      window.scroll({
          top: window.innerHeight + 170,
          left: 0,
          behavior: 'smooth'
        });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight/2) {
      header.style.backgroundColor = "#0E5D9E"
      header.style.boxShadow = "none"
      ul.style.backgroundColor = "#0E5D9E"
      lastli.style.boxShadow = "none"
    }
    else{
      header.style.backgroundColor = "rgba(14, 93, 158, 0.678)"
      header.style.boxShadow = "0px 0px 39px 36px rgb(14, 93, 158, 0.678)"
      ul.style.backgroundColor = "initial"
      lastli.style.backgroundColor = "rgba(14, 93, 158, 0.404)"
      lastli.style.boxShadow = "3px 0px 39px 36px rgb(14, 93, 158, 0.404)"
    }
  })

  function abrircontacto() {
    if (document.getElementById("divescondido").style.display == "none")  {
      document.getElementById("divescondido").style.display = "grid"
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
    else{
      document.getElementById("divescondido").style.display = "none"
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    }
  }
  
  
  document.getElementById("enviar").addEventListener("click",() => {
    var email = document.getElementById("email").value
  
    if (document.getElementById("Nombre").value != "" && document.getElementById("duda").value != "") {
      if (email.search("@") != -1) {
        Swal.fire({
          title: "Su correo se esta enviando.",
          text: "La página se recargará sola...",
          icon: 'info',
          showConfirmButton: false,
        })
      }
    }
  })
  
}

if (document.title == "Menciones") {
  var Menciones = [
    {
        Nombre: "Turismo",
        Img: "../img/menciones/turismo.png"
    },
    {
        Nombre: "Electronica",
        Img: "../img/menciones/electronica.png"
    },
    
    {
        Nombre: "Mecatronica",
        Img: "../img/menciones/mecatronica.png"
    },
    
    {
        Nombre: "Telemática",
        Img: "../img/menciones/telematica.png"
    },
    
    {
        Nombre: "Metalmecánica",
        Img: "../img/menciones/metalmecanica.png"
    },

    {
        Nombre: "Laboratorio Clinico",
        Img: "../img/menciones/lab clinico.png"
    },
]

Menciones.forEach(element => {
    var btn = document.createElement("button")
    btn.textContent = element.Nombre
    btn.onclick = CargaImg
    document.getElementById("btns-menciones").appendChild(btn)
});


function CargaImg(event) {
    Menciones.forEach(element => {
        if (event.target.textContent == element.Nombre) {
            var img = document.createElement("img")
            img.src = element.Img
            img.id = "img_mencion"        
            if (document.getElementById("img_mencion") == null) {
                document.getElementById("imgDiv").appendChild(img)
            } 
            else{
                document.getElementById("img_mencion").src = element.Img
            }
        }
    });
    
}
}

if (document.title == "Galeria") {
  function verimg(img) {
    if ( document.getElementById("imgcontainer").style.display == "none") {
        document.getElementById("imgcontainer").style.display = "grid"
        document.getElementById("imagenBig").src = img.target.src
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
    else{
        document.getElementById("imgcontainer").style.display = "none"
        document.getElementsByTagName("html")[0].style.overflow = "auto";
    }
  }
  
  for (let index = 1; index < 55; index++) {
    var img = document.createElement("img")
    img.src = "../img/galeria/ga (" + index + ").jpeg"
    img.onclick = verimg
  
    document.getElementById("imagenesdiv").appendChild(img)
    console.log(index)
  }
}

if (document.title != "Inicio") {
    
  header.style.backgroundColor = "#0E5D9E"
  header.style.boxShadow = "none"
  header.style.height = "70px"
  document.getElementById("membrete").style.marginBottom = "0"
  ul.style.backgroundColor = "#0E5D9E"
  lastli.style.boxShadow = "none"
  document.getElementById("cont").style.width = "80%"
  }
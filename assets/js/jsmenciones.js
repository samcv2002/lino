var ul = document.getElementsByClassName("listul")[0]
var check = document.getElementById("checkNosotros")
var header = document.getElementsByTagName("header")[0]
var lastli = document.getElementById("lastli")


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

    +
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

check.addEventListener("click", () =>{
    if (check.checked == true) {
      ul.style.opacity = "1";
      ul.style.visibility = "visible"
    }
    else{
      ul.style.opacity = "0";
      ul.style.visibility = "hidden"
    }
  })

header.style.backgroundColor = "#0E5D9E"
header.style.boxShadow = "none"
header.style.position = "Relative"
ul.style.backgroundColor = "#0E5D9E"
lastli.style.boxShadow = "none"
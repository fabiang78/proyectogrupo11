const nomAp = document.getElementById("nombreapellido");
const correo = document.getElementById("correoelectronico");
const telefono = document.getElementById("telefono");

const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


form.addEventListener("submit", e =>{
    e.preventDefault()

    let warnings = "";

    let envio = false;

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    parrafo.innerText = "";

    if(nomAp.value.length < 4){
        warnings += `El nombre no es valido <br>`
        //alert("Nombre muy corto");
        //parrafo.innerText = "Nombre muy corto";
        envio = true;
    }
    if(!regexEmail.test(correo.value)){
        warnings += `El e-mail no es valido <br>`
        envio = true;
    }
    if(telefono.value.length < 8){
        warnings += `El telefono no es valido <br>`
        envio = true;
    }

    if(envio){
        parrafo.innerText = warnings;
    }
    else{
        parrafo.innerText = "Enviado";
    }
})
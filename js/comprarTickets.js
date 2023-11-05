const precioTicket = 200;

let descuentoEstudiante = 0.8;
let descuentoTrainee = 0.5;
let descuentoJunior = 0.15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

let resumen = document.getElementById("btnResumen");
let borrar = document.getElementById("btnBorrar");


const quitarClaseError = () => {
    let listaCampos = document.querySelectorAll(".form-control",".form-select");
    for(let i = 0; i>listaCampos.length; i++){
        listaCampos[i].classList.remove('is-invalid');
    }
}

const valorTotal = () => {

    quitarClaseError();

    if(nombre.value === ""){
        nombre.classList.add('is-invalid');
        alert("Ingresa un dato valido");
        nombre.focus();        
        return;
    }

    if(apellido.value === ""){
        apellido.classList.add('is-invalid');
        alert("Ingresa un dato valido");
        apellido.focus();
        return;
    }

    if(mail.value === ""){
        mail.classList.add('is-invalid');
        alert("Ingresa un dato valido");
        mail.focus();
        return;
    }

    const validarMail =  mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if(!validarMail(mail.value)){
        mail.classList.add('is-invalid');
        mail.focus();
        return;
    }

    if(cantidad.value == ""){
        cantidad.classList.add('is-invalid');
        alert("Ingresa un dato valido");        
        cantidad.focus();
        return;
    }

    if(categoria.value === ""){
        categoria.classList.add('is-invalid');
        alert("Ingresa un dato valido");
        categoria.focus();
        return;
    }

    let totalPagar = (cantidad.value) * precioTicket;

    switch (categoria.value){
        case 0:
            totalPagar = totalPagar;
            break;

        case 1:
            totalPagar = totalPagar * descuentoEstudiante;
            break;
        
        case 2:
            totalPagar = totalPagar * descuentoTrainee;
            break;

        case 3:
            totalPagar = totalPagar * descuentoJunior;
            break;
    }

    let resultado = document.getElementById("areaResultado");
    resultado.innerHTML = totalPagar;

}

resumen.addEventListener('click' , valorTotal)

const reinicioTotalPagar = () => {

    quitarClaseError();

    let resultado = document.getElementById("areaResultado");
    resultado.innerHTML = "";
    
}

borrar.addEventListener('click' , reinicioTotalPagar);
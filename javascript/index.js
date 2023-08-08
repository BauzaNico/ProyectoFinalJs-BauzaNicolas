let nombreUsuario = "";
let contraseña = "";
let login = true

while (login) {
    nombreUsuario = prompt("Ingrese su nombre de usuario.-");
    contraseña = parseInt(prompt("ingrese su contraseña.- (SOLO NUMEROS)"));

    if(isNaN(nombreUsuario) && nombreUsuario != "" && !isNaN(contraseña) && contraseña != "") {
        alert (`Bienvenido/a ${nombreUsuario}! A continuación selecciona los servicios que desees.-`);
        console.log (`
        Nombre de usuario: ${nombreUsuario}
        Contraseña: ${contraseña}`);
        login = false
    } else {        
        alert ("Por favor ingrese los datos correctos para continuar");
        const verificar = prompt("Desea continuar? S/N").toUpperCase();

        if (verificar == "N") {
            login = false;
        } else {
            login = true;
        }
    }    
}


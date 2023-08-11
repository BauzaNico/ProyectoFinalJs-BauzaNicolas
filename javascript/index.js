                //REGISTRO

let usuario = "";
let codigo = "";
let mail = "";
let registro = true;

function register (nombreUsuario, email, contraseña) {
    usuario = nombreUsuario;
    codigo = contraseña;
    mail = email
}

while(registro) {
    alert ("Registrarse para poder realizar la compra")
    register (prompt("Ingrese su nombre de usuario"), prompt("Ingrese su e-mail"), parseInt(prompt("Crear una contraseña (SOLO NUMEROS)")));
    if(isNaN(usuario) && usuario != "" && !isNaN(codigo) && codigo != "" && mail != "") {
        alert ("Gracias por registrarse!");
        alert ("Debe logearse para poder continuar");
        console.log(`Nombre de usuario: ${usuario} Contraseña: ${codigo}`);
        break;
    } else {
        alert ("Debe completar el registro correctamente para poder continuar")
        const verificar = prompt("Desea continuar? S/N").toUpperCase();
        if (verificar == "N") {
            registro = false;
        } else {
            registro = true
        }        
    }
}

            //LOGIN

let continuarCompra = true

if(usuario != "" && codigo != "" && mail != "" && registro == true){
    
    while (continuarCompra) {   
        const nombreUsuario = prompt("Ingrese su nombre de usuario.");
        const contraseña = parseInt(prompt("ingrese su contraseña. (SOLO NUMEROS)"));
    
        if(nombreUsuario === usuario && contraseña === codigo) {
            alert (`Bienvenido/a ${nombreUsuario}! A continuación selecciona los productos que desees.-`);
            break;
        } else {        
            alert ("Usuario o Contraseña no coinciden!!");
            const verificar = prompt("Desea continuar? S/N").toUpperCase();
            if (verificar == "N") {
                continuarCompra = false;
            } else {
                continuarCompra = true;
            }
        }    
    }
}

        //COMPRA

function sumaCompra(a) {
    carrito += a
    cantidadDeProductos ++
}

let carrito = 0;   
let cantidadDeProductos = 0;

if(continuarCompra == true && registro == true){
    
    while(continuarCompra) {
    
        const eleccion = parseInt(prompt ('ingrese una opción: \n 1- Parlante JBL FLIP 6 - $27300 \n 2- Teclado Gamer - $15700 \n 3- Monitor led LG 29" - $175900 \n 4- Ver carrito \n 5- Terminar compra'));
    
        switch (eleccion) {
            case 1: 
                sumaCompra(27300);
                alert ("Parlante JBL FLIP 6 agregado al carrito");
                break;
            case 2:
                sumaCompra(15700);
                alert ("Teclado Gamer agregado al carrito");
                break;
            case 3: 
                sumaCompra(175900)
                alert ("Monitor LG agregado al carrito")
                break;
            case 4:
                alert (`$${carrito}`)
                break;
            case 5:
                alert(`A elegido ${cantidadDeProductos} productos.
                El precio total es de: $${carrito}`);
                continuarCompra = false;
                break;
            default:
                alert ("Opcion invalida");
                break;
        }
        console.log(`Total a pagar es de: $${carrito}`)
    }
}
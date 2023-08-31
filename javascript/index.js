               // REGISTRO

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
    alert ("Registrarse para poder realizar la compra");
    
    register (prompt("Ingrese su nombre de usuario"),
    prompt("Ingrese su e-mail"), 
    parseInt(prompt("Crear una contraseña (SOLO NUMEROS)")));

    if(isNaN(usuario) && usuario != "" && !isNaN(codigo) && codigo != "" && mail != "") {
        alert ("Gracias por registrarse!");
        alert ("Debe logearse para poder continuar");
        console.log(`Nombre de usuario: ${usuario} Contraseña: ${codigo}`);
        break;
    } else {
        alert ("Debe completar todos los campos para poder continuar");
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
        const contrasenia = parseInt(prompt("ingrese su contraseña. (SOLO NUMEROS)"));
    
        if(nombreUsuario === usuario && contrasenia === codigo) {
            alert (`Bienvenido/a ${nombreUsuario}!!`);
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

const nbProductos = [
    {
        cc: 1,
        name: "JBL Flip 6",
        price: 27300
    },
    {
        cc: 2,
        name: "Teclado Gamer",
        price: 15800
    },
    {
        cc: 3,
        name: 'Monitor led LG 29"',
        price: 175900
    },
    {
        cc: 4,
        name: "Mouse Trust Gxt133",
        price: 20194
    },
];


let carrito = [];

function iniciarCompra() {    
    if(continuarCompra == true && registro == true) {
        while(continuarCompra) {
            let eleccion = parseInt(
                prompt("Seleccionar Opción: \n 1. Ver Productos \n 2. Seleccionar Productos \n 3. Ver Carrito/ Realizar Comprar \n 4. Salir")
            );
            switch(eleccion) {
                case 1:
                    verProductos();
                    break;
                case 2:
                    selectProductAcomprar();
                    break;
                case 3:
                    verCarritoComprar();
                    break;
                case 4:
                    continuarCompra = false;
                    break;
                default:
                    alert ("Opción no valida");
                    break;
            }
        }
    }
};

function verProductos() {
    let totalProducts = "";
    nbProductos.forEach((elem) => {
        totalProducts += `${elem.cc}. ${elem.name} - $${elem.price} \n`
    });
    alert(totalProducts);
};

function selectProductAcomprar() {
    verProductos();
    let selectProduct = parseInt(prompt("Ingrese el numero del producto que desee agregar al carrito"));
    let productoelegido = nbProductos.find((elem) => elem.cc === selectProduct);
    if (productoelegido) {
        carrito.push(productoelegido);
        alert(`Productos agregados al carrito:\n ${carrito.map(product => `${product.name} - $${product.price}\n`)}`);
    } else {
        alert("No se pudo encontrar el producto");
        selectProductAcomprar();
    }    
    let confirmar = prompt("Desea agregar otro producto? S/N").toUpperCase();
    if (confirmar === "S") {
        selectProductAcomprar();
    } else {
        iniciarCompra();
    }
}

function verCarritoComprar() {
    let precioTotal = carrito.reduce((acum, products) => acum + products.price, 0)
   alert(`Este es tu carrito:\n ${carrito.map(product => `${product.name} - $${product.price}\n`)} \n MONTO TOTAL: $${precioTotal}`);

    if (carrito != "") {
        let confirmCompra = prompt("Desea realizar la compra de estos productos? S/N").toUpperCase();
        
        if (confirmCompra == "S") {
            alert("Compra realizada con exito!!")
            eliminarProductos();
        } else if(confirmCompra == "N") {
            guardarOeliminar();
        }
    }
}

function guardarOeliminar() {
    let guardarOno = parseInt(prompt("Guardaremos tu carrito por si deseas agregar otro producto o bien lo puedes eliminar.\n 1. Guardar \n 2. Eliminar... \n 3. Volver atras"));
    switch(guardarOno) {
        case 1:
            alert("Carrito guardado, puedes seguir agregando productos!")
            iniciarCompra();
            break;
        case 2:
            eliminarProductos();
            alert("Carrito eliminado!")
            iniciarCompra();
            break;
        case 3:
            iniciarCompra();
            break;
        default:
            alert("Opcion no valida!");
            guardarOeliminar();
            break;
    }
}

function eliminarProductos(){
    carrito.splice(0, carrito.length)
}


iniciarCompra();
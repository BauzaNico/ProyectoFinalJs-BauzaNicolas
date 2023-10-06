
//SUSCRIPCION
const formSub = document.querySelector('#formSub');
const openSub = document.querySelector('.openSub');
const containerSub = document.querySelector('.containerSub');
const btnSuscribirse = document.querySelector('.btnSuscribirse');
const btnCancelarSub = document.querySelector('.btnCancelarSub');
const formCompleto = document.querySelectorAll('.formCompleto');
//INICIO DE SESION
const formLogIn = document.querySelector('#formLogIn');
const inputInicioSesion = document.querySelectorAll('.inputInicioSesion')
const containerLogin = document.querySelector('.containerLogin');
const btnIraLogIn = document.querySelector('.btnIraLogIn');
const btnCierreLogin = document.querySelector('.btnCierreLogin');
const btnIniciarSesion = document.querySelector('.btnIniciarSesion');
const btnSesionActiva = document.querySelector('.btnSesionActiva');
const btnCarrito = document.querySelector('.btnCarrito');
const cerrarSesion = document.querySelector('.cerrarSesion')
//SECCION ADMIN
const containerAdmin = document.querySelector('.containerAdmin');
const formAdmin = document.querySelector('#formAdmin')
const inputAdminInicio = document.querySelectorAll('.inputAdminInicio');
const containerCargaProduct = document.querySelector('.containerCargaProduct');
const btnIrAcargarProducto = document.querySelector('.btnIrAcargarProducto');
const btnCierreAdminInicio = document.querySelector('.btnCierreAdminInicio');
const btnIrAadmin = document.querySelector('.btnIrAadmin');
const btnSalirFormAdmin = document.querySelector('.btnSalirFormAdmin');
//CARGAR PRODUCTOS
const formCargaProduct = document.querySelector('#formCargaProduct');
const containerProducto = document.querySelector('.containerProducto');
const nombreProducto = document.querySelector('#nombreProduct');
const marcaProducto = document.querySelector('#marcaProduct');
const precioProducto = document.querySelector('#precioProduct');
const imagenUrl = document.querySelector('#imagenUrl');

const carritoProductos = document.querySelector('#carrito');


// ARRAYS Productos
let productos = [];
let carrito = obtenerCarritoDelLocalStorage() || [];

// Función para obtener productos del almacenamiento local
function obtenerCarritoDelLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

// Función para cargar productos desde el archivo JSON
function cargarProductosDesdeJSON() {
    fetch('./data.json') // Ruta al archivo JSON
        .then(response => response.json())
        .then(data => {
            productos = data;            
            mostrarProductos();            
        })
        .catch(error => {
            console.error('Error al cargar productos desde el archivo JSON:', error);
        });
        
};

//SUSCRIPCION
openSub.addEventListener('click', () => {
    containerSub.classList.remove('show');
});

formCompleto.forEach((input) => {
    input.addEventListener('input', () => {
        if (formCompleto[0].value && 
            formCompleto[1].value && 
            formCompleto[2].value && 
            formCompleto[3].value && 
            formCompleto[3].value === formCompleto[2].value) {     

            btnSuscribirse.classList.remove('disabled');
            
        } else {            
            btnSuscribirse.classList.add('disabled');
        }
    })
});

function nuevaSuscripcion() {
    const nombreUsuario = formCompleto[0].value;
    const email = formCompleto[1].value;
    const password = formCompleto[3].value;

    const datosGuardados = localStorage.getItem('Datos Suscripcion');
    let suscripciones = [];

    if(datosGuardados) {
        suscripciones = JSON.parse(datosGuardados);
    }

  
    const suscripcion = {
        nombreUsuario,
        email,
        password,
    };

    suscripciones.push(suscripcion);
    localStorage.setItem('Datos Suscripcion', JSON.stringify(suscripciones));

   
    formSub.reset();
    containerSub.classList.add('show');
    containerLogin.classList.remove('showLogIn');
}

// evento para manejar la suscripción
formSub.addEventListener('submit', (e) => {
    e.preventDefault();
    nuevaSuscripcion()

});

btnCancelarSub.addEventListener('click', () => {
    containerSub.classList.add('show');
    formSub.reset();
});

//INICIO DE SESION
btnIraLogIn.addEventListener('click', () => {
    containerSub.classList.add('show');
    containerLogin.classList.remove('showLogIn');
});

btnCierreLogin.addEventListener('click', () => {
    containerLogin.classList.add('showLogIn');
    formLogIn.reset();
});

// Funciones para manejar el inicio de sesión
inputInicioSesion.forEach((input) => {
    input.addEventListener('input', () => {
    const datosGuardados = localStorage.getItem('Datos Suscripcion');
        if(datosGuardados) {
            const suscripcion = JSON.parse(datosGuardados);
            const emailLogin = inputInicioSesion[0].value;
            const passwordLogin = inputInicioSesion[1].value;
            const usuarioEncontrado = suscripcion.find((e) => 
                e.email === emailLogin && e.password === passwordLogin
            );

            if(usuarioEncontrado) {
                btnIniciarSesion.classList.remove('disabled');                
                
            } else{
                btnIniciarSesion.classList.add('disabled');
            }
            
        }
    })
})

function iniciarSesion() {
    const usuario = inputInicioSesion[0].value
    
    const sesionActiva = {
        usuario
    };

    localStorage.setItem('Sesion Activa', JSON.stringify(sesionActiva));
    containerLogin.classList.add('showLogIn')
    formLogIn.reset();
}

function mantenerSesion() {
    const sesionLocal = localStorage.getItem('Sesion Activa')
    if(sesionLocal) {
        openSub.classList.add('btnSubDisabled')
        btnSesionActiva.classList.remove('btnNavDisabled')
        btnCarrito.classList.remove('btnNavDisabled')
        
    } else {
        openSub.classList.remove('btnSubDisabled');
        btnSesionActiva.classList.add('btnNavDisabled')
        btnCarrito.classList.add('btnNavDisabled')
    }
}

formLogIn.addEventListener('submit', (e) => {
    e.preventDefault();
    iniciarSesion();
    btnIniciarSesion.classList.add('disabled');
    mantenerSesion()

});

btnIniciarSesion.addEventListener('click', () => {    
    mantenerSesion();
    swal("Sesión Iniciada!", "Ya puedes elegir tus productos", "success");
})

cerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('Sesion Activa')
    mantenerSesion();
})

mantenerSesion();

//SECCION ADMIN
//SECCION ADMIN
btnIrAcargarProducto.addEventListener('click', () => {
    containerAdmin.classList.remove('showAdmin');
});

btnCierreAdminInicio.addEventListener('click', () => {
    containerAdmin.classList.add('showAdmin');
});

inputAdminInicio.forEach((input) => {
    input.addEventListener('input', () => {
        if (inputAdminInicio[0].value === "adminTutor" && inputAdminInicio[1].value ==="adminTutor") {
            btnIrAadmin.classList.remove('disabled');
        } else {
            btnIrAadmin.classList.add('disabled');
        }
        
    });
});

btnIrAadmin.addEventListener('click', () => {    
    btnIrAadmin.classList.add('disabled');
    containerAdmin.classList.add('showAdmin');
    containerCargaProduct.classList.remove('showFormCarga');
    formAdmin.reset();
    
});

// Funciones para cargar productos

function cargarProductosDesdeLocalStorage() {
    const productosGuardados = localStorage.getItem('productos');
    productos = productosGuardados ? JSON.parse(productosGuardados) : [];
}


function cargarProductos() { 
    const producto = {
        id: Date.now(),
        nombre: nombreProducto.value,
        marca: marcaProducto.value,
        precio: parseFloat(precioProducto.value),
        imagenUrl: imagenUrl.value || 'https://via.placeholder.com/150',
    };

    
    productos.push(producto);

   
    localStorage.setItem('productos', JSON.stringify(productos));

 
    mostrarProductos();
    formCargaProduct.reset();
}


function mostrarProductos() {    
    cargarProductosDesdeJSON()
    
    containerProducto.innerHTML = '';

    productos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('d-inline-block');
        card.innerHTML = `
            <img src="${producto.imagenUrl}" class="card-img-top" alt="Imagen del producto">
            <div class="card-body">
                <h6 class="card-title">${producto.nombre}</h6>                  
                <p class="card-text">${producto.marca}</p>
                <p class="card-text">$${parseFloat(producto.precio).toFixed(2)}</p>
                <button class="btn btn-primary btnAgregarCarrito" data-index="${index}">Agregar al Carrito</button>
            </div>`;
        containerProducto.appendChild(card);
        
    });
    
    
}

formCargaProduct.addEventListener('submit', (e) => {
    e.preventDefault();
    cargarProductos()
    mostrarProductos()
    
});

btnSalirFormAdmin.addEventListener('click', () => {
    formCargaProduct.reset();
    containerCargaProduct.classList.add('showFormCarga')
});



// Función para agregar un producto al carrito

function agregarAlCarrito(index) {
  
    const producto = productos[index];
    carrito.push({
        nombre: producto.nombre,
        precio: parseFloat(producto.precio), 
        imagen: producto.imagenUrl, 
    });

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    Toastify({
        text: `Haz agregado ${producto.nombre} al carrito`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

   
    mostrarProductosEnCarrito();
}

function mostrarProductosEnCarrito() {
    carritoProductos.innerHTML = '';

    let totalCompra = 0;

    carrito.forEach((producto, index) => {
        const carritoItem = document.createElement('div');
        carritoItem.className = 'carrito-item card-horizontal';
        carritoItem.innerHTML = `
            <div class="carrito-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-thumbnail">
            </div>
            <div class="carrito-info">
                <h5>${producto.nombre}</h5>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-acciones">
                <button class="btn btn-danger btnEliminarCarrito" data-index="${index}">Eliminar</button>
            </div>
        `;

        carritoProductos.appendChild(carritoItem);

        totalCompra += parseFloat(producto.precio);
    });

    const totalElemento = document.createElement('p');
    totalElemento.innerHTML = `<strong>TOTAL: $${totalCompra.toFixed(2)}</strong>`;
    carritoProductos.appendChild(totalElemento);
}


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnAgregarCarrito')) {
        const index = e.target.getAttribute('data-index');
        agregarAlCarrito(index);
        mostrarProductosEnCarrito();
    }
});

carritoProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnEliminarCarrito')) {
        const index = e.target.getAttribute('data-index');
        carrito.splice(index, 1);

    
        localStorage.setItem('carrito', JSON.stringify(carrito));

   
        mostrarProductosEnCarrito()
    }
});

const carritoGuardado = localStorage.getItem('carrito');
if (carritoGuardado) {
    carrito.push(...JSON.parse(carritoGuardado));
    mostrarProductosEnCarrito();
}

document.addEventListener('DOMContentLoaded', () => {    
    cargarProductosDesdeJSON();  
    cargarProductosDesdeLocalStorage()
    mostrarProductosEnCarrito();
    mostrarProductos();
})

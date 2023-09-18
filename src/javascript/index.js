            //SUSCRIPCION
            //SUSCRIPCION
const openSub = document.querySelector('.openSub');
const btnCancelarSub = document.querySelector('.btnCancelarSub');
const btnSuscribirse = document.querySelector('.btnSuscribirse');
const containerSub = document.querySelector('.containerSub');
const formCompleto = document.querySelectorAll('.formCompleto');
const formSub = document.querySelector('#formSub');
let validarFormSub = false
            //LOGIN
            //LOGIN
const btnIraLogIn = document.querySelector('.btnIraLogIn');
const containerLogin = document.querySelector('.containerLogin');
const btnCierreLogin = document.querySelector('.btnCierreLogin');
const btnIniciarSesion = document.querySelector('.btnIniciarSesion');
const formLogIn = document.querySelector('#formLogIn');
const formInicioSesion = document.querySelectorAll('.formInicioSesion');
const btnSesionActiva = document.querySelector('.btnSesionActiva');
const btnCarrito = document.querySelector('.btnCarrito');
const cerrarSesion = document.querySelector('.cerrarSesion')
            //SECCION ADMIN
            //SECCION ADMIN
const btnIrAcargarProducto = document.querySelector('.btnIrAcargarProducto');
const containerAdmin = document.querySelector('.containerAdmin');
const btnCierreAdminInicio = document.querySelector('.btnCierreAdminInicio');
const btnIrAadmin = document.querySelector('.btnIrAadmin');
const formAdmin = document.querySelector('#formAdmin');
const containerCargaProduct = document.querySelector('.containerCargaProduct');
const inputAdminInicio = document.querySelectorAll('.inputAdminInicio');
const formCargaProduct = document.querySelector('#formCargaProduct');
const inputPushProduct = document.querySelectorAll('.inputPushProduct');
const containerProducto = document.querySelectorAll('.containerProducto');
const btnPushProduct = document.querySelector('.btnPushProduct');
const btnSalirFormAdmin = document.querySelector('.btnSalirFormAdmin');
            //AGREGAR PRODUCTOS AL CARRITO
            //AGREGAR PRODUCTOS AL CARRITO
const btnAgregarAlCarrito = document.querySelectorAll('.btnAgregarAlCarrito');
const containerCarrito = document.querySelector('.containerCarrito');
const closeCarrito = document.querySelector('.closeCarrito');
const offcanvasContainer = document.querySelector('.offcanvasContainer');





            //SUSCRIPCION
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

            validarFormSub = true
            btnSuscribirse.classList.remove('disabled');
            
        } else {
            validarFormSub = false
            btnSuscribirse.classList.add('disabled');
        }
    })
});

function suscripcionAdd() {
    const nombreUsuario = formCompleto[0].value;
    const email = formCompleto[1].value;
    const contrasenia = formCompleto[3].value;
   
    const datosGuardados = localStorage.getItem('datosSub');
    let suscripciones = [];

    if (datosGuardados) {
        suscripciones = JSON.parse(datosGuardados);
    }
   
    const nuevaSuscripcion = {
        nombreUsuario,
        email,
        contrasenia
    };

    suscripciones.push(nuevaSuscripcion);
    localStorage.setItem('datosSub', JSON.stringify(suscripciones));
    formSub.reset();
    containerSub.classList.add('show');
    validarFormSub = false;
};

formSub.addEventListener('submit', (e) => {    
    e.preventDefault();
    suscripcionAdd();
    
});

btnCancelarSub.addEventListener('click', () => {
    containerSub.classList.add('show');
    formSub.reset();
});

            //LOGIN
            //LOGIN
btnIraLogIn.addEventListener('click', () => {
    containerSub.classList.add('show');
    containerLogin.classList.remove('showLogIn');
});

btnCierreLogin.addEventListener('click', () => {
    containerLogin.classList.add('showLogIn');
    formLogIn.reset();
});

formInicioSesion.forEach((input) => {
    input.addEventListener('input', () => {
    const datosSuscripciones = localStorage.getItem('datosSub');
        if(datosSuscripciones) {
            const suscripciones = JSON.parse(datosSuscripciones);
            const usuarioOrEmail = formInicioSesion[0].value;
            const contrasenia = formInicioSesion[1].value;
            const usuarioEncontrado = suscripciones.find((e) => 
                e.email === usuarioOrEmail && e.contrasenia === contrasenia
            );

            if(usuarioEncontrado) {
                btnIniciarSesion.classList.remove('disabled');                
                
            } else{
                btnIniciarSesion.classList.add('disabled');
            }
            
        }
    })
})

function sesionIniciada() {
    const usuario = formInicioSesion[0].value
    
    const sesionActiva = {
        usuario
    };
    localStorage.setItem('Sesion Activa', JSON.stringify(sesionActiva));
    containerLogin.classList.add('showLogIn')
    formLogIn.reset();
};

formLogIn.addEventListener('submit', (e) => {
    e.preventDefault();
    sesionIniciada();
    btnIniciarSesion.classList.add('disabled',);
    mantenerSesion();   
});

btnIniciarSesion.addEventListener('click', () => {
    mantenerSesion()
})

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

btnCarrito.addEventListener('click', () => {
    offcanvasContainer.classList.remove('carritoDisabled')
})

closeCarrito.addEventListener('click', () => {
    offcanvasContainer.classList.add('carritoDisabled')
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
    formAdmin.reset();
    btnIrAadmin.classList.add('disabled');
    containerAdmin.classList.add('showAdmin');
    containerCargaProduct.classList.remove('showFormCarga');
});

function agregarProducto() {
    const id = inputPushProduct[0].value;
    const nombre = inputPushProduct[1].value;
    const marca = inputPushProduct[2].value;
    const precio = inputPushProduct[3].value;
    const imagenUrl = inputPushProduct[4].value;

    const dbProductsSubidos = {
        id,
        nombre,
        marca,
        precio,
        imagenUrl
    };

    let productosAgregados = JSON.parse(localStorage.getItem('Productos Agregados')) || [];
    productosAgregados.push(dbProductsSubidos);
    localStorage.setItem('Productos Agregados', JSON.stringify(productosAgregados));

    mostrarProducto();
    formCargaProduct.reset();
}

function mostrarProducto() {
    containerProducto.forEach((productos) => {
        productos.innerHTML = '';
        const productosEnLocalS = localStorage.getItem('Productos Agregados');
        if (productosEnLocalS) {
            const productosAmostrar = JSON.parse(productosEnLocalS);
            productosAmostrar.forEach((eProducto) => {
                const card = document.createElement('div');
                card.classList.add('card')
                card.classList.add('d-inline-block');
                card.innerHTML = `
                <img src="${eProducto.imagenUrl}" class="card-img-top" alt="Imagen del producto">
                <div class="card-body">
                  <h6 class="card-title">${eProducto.nombre}</h6>                  
                  <p class="card-text">${eProducto.marca}</p>
                  <p class="card-text">$${eProducto.precio}</p>
                  <button class="btn btn-success btnAgregarAlCarrito" id="${eProducto.id}">Añadir al Carrito</button>
                </div>`;
                productos.appendChild(card);
            });
        }
    });
}

inputPushProduct.forEach((input) => {
    input.addEventListener('input', () => {
        if (inputPushProduct[0].value && inputPushProduct[1].value && inputPushProduct[2].value && inputPushProduct[3].value && inputPushProduct[4].value) {
            btnPushProduct.classList.remove('disabled');
        } else {
            btnPushProduct.classList.add('disabled');
        }
    });
});

formCargaProduct.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarProducto();
});

btnSalirFormAdmin.addEventListener('click', () => {
    formCargaProduct.reset();
    containerCargaProduct.classList.add('showFormCarga')
});

mostrarProducto();

        //AGREGAR PRODUCTOS AL CARRITO
        //AGREGAR PRODUCTOS AL CARRITO (LO COMENTÉ PORQUE NO ESTOY LOGRANDO QUE FUNCIONE)

// btnAgregarAlCarrito.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const productoId = e.target.id;
//         anadirAlCarrito(productoId);
//       });
// });

// function anadirAlCarrito(productoId) {
//     const productoSeleccionado = JSON.parse(localStorage.getItem('Productos Agregados')).find((producto) => producto.id === productoId);
  
//     let carrito = JSON.parse(localStorage.getItem('Carrito')) || [];
//     carrito.push(productoSeleccionado);
//     localStorage.setItem('Carrito', JSON.stringify(carrito));
  
//     mostrarCarrito();
//   };

//   function mostrarCarrito() {
    
//     const carrito = JSON.parse(localStorage.getItem('Carrito'));
  
//     containerCarrito.innerHTML = '';
  
//     if (carrito.length === 0) {
//       containerCarrito.innerHTML = '<p>No hay productos en el carrito</p>';
//     } else {
//       let total = 0;
//       carrito.forEach((producto) => {
//         containerCarrito.innerHTML += `
//           <div>
//             <p>${producto.nombre}</p>
//             <p>Precio: $${producto.precio}</p>
//           </div>
//         `;
//         total += producto.precio;
//       });
//       containerCarrito.innerHTML += `<strong>TOTAL: $${total}</strong>`;
//     }
//   };

 
  


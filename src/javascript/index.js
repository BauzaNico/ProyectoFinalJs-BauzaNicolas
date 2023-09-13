            //SUSCRIPCION
const openSub = document.querySelector('.openSub');
const cancelarSub = document.querySelector('.cancelarSub');
const suscribirse = document.querySelector('.suscribirse');
const containerSub = document.querySelector('.containerSub');

openSub.addEventListener('click', () => {
    containerSub.classList.add('show');
});

cancelarSub.addEventListener('click', () => {
    containerSub.classList.remove('show');
})
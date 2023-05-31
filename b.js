const profi = document.querySelector('.sl');
const iconn = document.querySelector('.cont');
if (profi && iconn) {
    profi.addEventListener('click', () => {
        iconn.classList.toggle('active')
        profi.classList.toggle('active')
    })
}
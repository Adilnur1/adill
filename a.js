
const profil = document.querySelector('.burgerr');
const ico = document.querySelector('.iconn');
if (profil && ico) {
    profil.addEventListener('click', () => {
        ico.classList.toggle('active')
        profil.classList.toggle('active')
    })
}
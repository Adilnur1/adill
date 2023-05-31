const str = document.querySelector('.bxs-heart');
const profile = document.querySelector('.burger');
const ic = document.querySelector('.icon');
if (profile && ic) {
    profile.addEventListener('click', () => {
        ic.classList.toggle('active')
        profile.classList.toggle('active')
    })
}



function createTemlate (post) {
    return `
     <div class="new-info1">
    <div class="info-photo1"><img class="img" src="${post.photo}" alt="${post.title}"></div>
    <div class="new-item123"><img src="img/small.png" alt=""></div>
    <div class="info-photo">
        <div class="info-title1">
            <div class="info-item1">29.11.2022</div>
            <div class="info-item2"><img src="img/heart.png" alt=""></div>
        </div>
        <div class="info-title2">${post.title}</div>
        <div class="info-title3">
            ${post.description}
        </div>
        <div class="info-title4">
            <a href="home-2.html">Читать дальше>></a>
        </div>
        <div class="info-title5"><a href="share.html"><img src="img/share-2.png" alt=""></a></div>
    </div>
</div>
` 
}


fetch("https://6476ad029233e82dd53a4022.mockapi.io/news")
    .then(response => response.json())
    .then(data => {
        let coteiner = document.getElementById("conteinn");
        data.forEach((post =>{
            const template = createTemlate(post);
            coteiner.innerHTML += template;
        }))
    }).catch((error) => alert(`Ошибка: ${error}!`))


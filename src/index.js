console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

addEventListener("DOMContentLoaded", function(){
    fetch(imgUrl)
    .then(function (response) {
        const data = response.json();
        return data;
    }) 
    .then(function (data) {
        const dogImgs = document.querySelector('#dog-image-container')
        for (i = 0; i < data.message.length; i++) {
            const dogImg = data.message[i]
            const img = dogImgs.appendChild(document.createElement("img"))
            img.src = dogImg
            img.height = 250
        };
    });
});

addEventListener("DOMContentLoaded", function(){
    fetch(breedUrl)
        .then(function (response) {
            const breedData = response.json();
            return breedData;
        })
        .then(function(data){
            console.log(data)
            const breeds = document.querySelector("#dog-breeds")
            for (const breed of Object.keys(data.message)) {
                const breedLi = breeds.appendChild(document.createElement("li")).innerText = breed
                }
            })
});


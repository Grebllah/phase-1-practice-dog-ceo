console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breeds = ""

addEventListener("DOMContentLoaded", function(){

    const breedDropdown = document.querySelector("#breed-dropdown")
    const breedsList = document.querySelector("#dog-breeds")
    const lis = document.querySelectorAll("li")
    
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
            img.height = 100
        };
    });
    
    fetch(breedUrl)
        .then(function (response) {
            const breedData = response.json();
            return breedData;
        })
        .then(function(data){
            breeds = Object.keys(data.message)
            for (const breed of breeds) {
                const breedLi = document.createElement("li")
                breedsList.appendChild(breedLi).innerText = breed
                breedLi.addEventListener("click", function(e){
                    e.target.style.color = "firebrick"
                })
            }
        })
    
    breedDropdown.addEventListener("change", function(e){
        breedsList.innerHTML = ""
        const filteredBreeds = breeds.filter(breedName => breedName[0] === e.target.value)
        for (const breed of filteredBreeds) {
            const breedLi = document.createElement("li")
            breedsList.appendChild(breedLi).innerText = breed
            breedLi.addEventListener("click", function(e){
                e.target.style.color = "firebrick"
            })
        }
    })

}); 
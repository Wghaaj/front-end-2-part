const sorted = movies.sort((a,b) => a - b)

console.log(sorted.reverse(movies.date));

const favourites = sorted.slice(0,16)

console.log(favourites);

const cardTitles = document.querySelectorAll(".title p")
favourites.forEach((movies, index) => {
    if (index < cardTitles.length) {
        cardTitles[index].textContent = movies.title
    }
});

const cardDescriptions = document.querySelectorAll(".description p")
favourites.forEach((movies, index) => {
    if (index < cardDescriptions.length) {
        cardDescriptions[index].textContent = movies.extract
    }
})

const cardImages = document.querySelectorAll(".card img")
favourites.forEach((movies, index) => {
    if (index < cardImages.length ) {
        cardImages[index].src = movies.thumbnail
        cardImages[index].alt = movies.title
    }
});
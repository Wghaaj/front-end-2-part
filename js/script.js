const sorted = movies.sort((a,b) => b.year - a.year)

// console.log(sorted);

const favourites = sorted.slice(0,16)

// console.log(favourites);

const cardTitles = document.querySelectorAll(".title p")
newSorted.forEach((movies, index) => {
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
    if (movies.thumbnail) {
        const img = new Image ()
        img.onload = function () {
            cardImages[index].src = movies.thumbnail
        }
        img.onerror = function() {
            cardImages[index].src = "images/coming-soon.jpg"
        }
        img.src = movies.thumbnail
    } else {
        cardImages[index].src = "images/coming-soon.jpg"
    }

    cardImages[index].alt = movies.title

});

const filtered = movies.filter(function(movie) {
    return movie.genres.includes("Action")
})

console.log("Filtered: ",filtered);

const genres = movies.reduce(function (acc, movie) {
    movie.genres.forEach(function(genre) {
        if (!acc.includes(genre)) {
            acc.push(genre)
        }
    });
    return acc
}, [])

console.log("Genres: ",genres);

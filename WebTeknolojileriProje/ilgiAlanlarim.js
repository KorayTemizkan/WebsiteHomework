fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
    "method": "GET",
    "headers": {
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        "X-RapidAPI-Key": "271d2a84ebmsh6c7934d63a268bcp151581jsndc6cfb8283da"
    }
})
    .then(response => response.json())
    .then(data => {
        const wantedRanks = [10,11,12,14,16,28,46,51,57];
        const filteredMovies = data.filter(movie => wantedRanks.includes(movie.rank));

        filteredMovies.forEach((item) => {
            const bigImage = item.big_image;
            const name = item.title;
            const rating = item.rating;
            const rank = item.rank;
            const link = item.imdb_link;

            const movie = `
               <li>
                    <img src="${bigImage}" alt="${name}">
                    <h2>Rating: ${rating}</h2>
                    <h2>${name}</h2>
                    <p>Rank: ${rank}</p>
                    <a href="${link}" target="_blank">IMDb Link</a>
                </li>`;

            document.querySelector('.movies').innerHTML += movie;
        });
    })
    .catch(err => {
        console.error(err);
    });

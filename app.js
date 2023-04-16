(async () => {
    const response = await fetch("movie.json");
    const movies = await response.json();
    console.log(movies);

    const genreElem = document.getElementById("searchGenere");
    const yearElem = document.getElementById("searchYear");
    const languageElem = document.getElementById("searchLanguage");
    const ratingElem = document.getElementById("searchRating");
    const table = document.getElementById("dataOutput");

    function displaySearchResult(results) {
        table.innerHTML = " ";
        counter = 1;
        results.forEach((movie) => {
            let date = movie.release_date.split("-");
            let year = date[0];
            table.innerHTML += `
         <tr class="bg-white border-b dark:bg-gray-200 text-gray-900 dark:border-gray-700">
             <td class="px-6 py-3">${counter}</td>
             <td class="px-6 py-3">${movie.title}</td>
             <td class="px-6 py-3">${year}</td>
         </tr>
      `;
            counter++;

        })
    }




    function search() {
        const genreQuery = genreElem.value.toLowerCase();
        const yearQuery = yearElem.value.toLowerCase();
        const languageQuery = languageElem.value.toLowerCase();
        const ratingQuery = ratingElem.value.toLowerCase();



        const results = movies.filter(function (movie) {
            let date = movie.release_date.split("-");
            let year = date[0];
            return (movie.original_language.toLowerCase().includes(languageQuery) &&
                movie.vote_average >= ratingQuery && movie.genres.toString(" ").toLowerCase().includes(genreQuery) && year == yearQuery)
        })
        console.log(results);
        displaySearchResult(results);

    }
    btnElem.addEventListener("click", search);




})();
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(arr => arr.director);    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMovies = moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const arrayWithScore = moviesArray.filter(movie => typeof(movie.score) === "number");
    const totalScore = arrayWithScore.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score;
    },0);
    return +(totalScore / moviesArray.length).toFixed(2);
    }
    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearMovies = [...moviesArray];
    yearMovies.sort (function(a, b){
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    });

    return yearMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const nameMovies = [...moviesArray];
    nameMovies.sort (function(a, b){
        if (a.title < b.title) return -1;
        if (a.title === b.title) return 0;
        if (a.title > b.title) return 1;

    });
    const titles = nameMovies.map((oneMovie) => oneMovie.title).slice(0,20);
    return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

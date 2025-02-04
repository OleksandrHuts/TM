//API

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzc1N2M3ODlmMTQ0MWIwMDllZjA2MDkyNmRhMjMxZCIsIm5iZiI6MTcyOTYyMjA3NC45MjUsInN1YiI6IjY3MTdmMDNhMjJmMTRhMGM1ZDg1NzE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L-KR-SwJI4Hd0-KidGNyh7WgcO2Brk3hnTodRgzrNW4'
    }
};

function searchMovie() {
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

    const movieName = document.querySelector('.movie_name').value || '';

    fetch(BASE_URL + `&query=${movieName}`, options)
        .then(res => res.json())
        .then(res => generateGrid(res.results))
        .catch(err => console.error(err));
}

function getData() {
    // fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    //     .then(res => res.json())
    //     .then(res => generateGrid(res.results))
    //     .catch(err => console.error(err));

    axios('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(res => generateGrid(res.data.results))
        .catch(err => console.error(err));
}

function generateGrid(movies) {
    const grid = document.querySelector('.movies-grid');

    let cards = '';

    console.log(movies);
    movies.forEach(movie => {
        cards = cards + `
            <div class="col">
                <div class="card shadow-sm">
                    <img
                        class="bd-placeholder-img card-img-top"
                        width="100%" height="225"
                        src='https://image.tmdb.org/t/p/original${movie.backdrop_path}' />
                    </svg>
                    <div class="card-body">
                        <h2>${movie.title}</h2>
                        <p class="card-text">${movie.overview}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small class="text-body-secondary">${movie.release_date}</small>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    grid.innerHTML = cards;
}

// Promise: resolve, reject, async/await, callstack - черга
// pending -> виконується. в процессі.
// fullfilled -> виконаний, повертає данні
// rejected -> помилка


function getData() {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=6de55f9e30c69ef94e7d23b00032b088';
    const cityName = document.querySelector('.wrapper_input').value || '';

    fetch(BASE_URL + `&q=${cityName}`, { method: 'GET' })
        .then(response => {
            return response.json();
        })
        .then(res => {
            genarateGrid(res.weather)
            console.log(res);
        })
}
function genarateGrid(weather) {
    const grid = document.querySelector('.wether_grid');
    let wet = '';
    weather.forEach(element => {
        wet = wet + `
    <div class="feel">
            <h2>Feels like</h2>
            <p>${response.main.feels_like}</p>
        </div>
        <div class="degree">${weather.temp}</div>
        <div class="effects">${weather.main}</div>
        <div class="box">
        <div class="wind">${weather.speed}</div>
        <div class="precipitation">${weather.all}</div>
        <div class="humidity">${weather.humidity}</div>
        </div>
    `
    });
    grid.innerHTML = wet;
}
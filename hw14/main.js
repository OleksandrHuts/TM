const API_KEY = '6de55f9e30c69ef94e7d23b00032b088'
function getData() {
   
   
    const cityName = document.querySelector('.wrapper_input').value || '';

    if(!cityName) return false;

    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${ API_KEY}`;

    fetch(BASE_URL + `&q=${cityName}`, { method: 'GET' })
        .then(response => {
            return response.json();
        })
        .then(res => {
            genarateGrid(res)
           
        })
}
function genarateGrid(res) {
    const { main, wind } = res;
    const grid = document.querySelector('.wether_grid');
    let wet = `
    <div class="feel">
            <h2>Feels like</h2>
            <p>t ${Math.round(main.feels_like)} °C</p>
        </div>
        <div class="degree">t ${Math.round(main.temp)} °C</div>
       
        <div class="box">
        <div class="pressure">${main.pressure}mm</div>
        <div class="wind">${wind.speed}m/s</div>
        <div class="humidity">${main.humidity}%</div>
        </div>
    `
    grid.innerHTML = wet;
}
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import './WeatherSearch.css'

const API_KEY = '6de55f9e30c69ef94e7d23b00032b088'
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;
export default function WeatherSearch() {
    const [cityName, setCityName] = useState('');
    const [cityWeather, setCityWeather] = useState({});
    function searchWeather() {


        fetch(BASE_URL + `&q=${cityName}`, { method: 'GET' })
            .then(response => {
                return response.json();
            })
            .then(res => {
                setCityWeather(res)

            })
    }


    return (
        <div className="container">
            <Input
                onChangeFunction={setCityName}
                type='text'
                placeholder='Enter the name of the city'
            />
            <Button
                clickHandler={searchWeather}
                label='Search'
                className='button_search' />



            <div className="grid">


                for(cityWeather in res) {
                 const {main, wind} = res;


               let wet = `
                <>

                    <div className="feel">
                        <h2>Feels like</h2>
                        <p>t ${Math.round(main.feels_like)} °C</p>
                    </div>
                    <div className="degree">t ${Math.round(main.temp)} °C</div>

                    <div className="box">
                        <div className="pressure">${main.pressure}mm</div>
                        <div className="wind">${wind.speed}m/s</div>
                        <div className="humidity">${main.humidity}%</div>
                    </div>
                </>
                `
                return wet;
              }



            </div>



        </div>
    )
}
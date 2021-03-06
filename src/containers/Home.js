import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import WeatherCard from '../components/WeatherCard';

const API_KEY = `20a967d762faea373696c39bd126aea2`;

// URL Search Params
// localhost:3000/?city=paris

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Home() {
    const [city, setCity] = useState();
    const [weatherData, setWeatherData] = useState();
    let query = useQuery();

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

    useEffect(() => {
        const cityValue = query.get('city');
        setCity(cityValue);
    }, [query]);

    useEffect(() => {
        // get weather data from weather API

        // allows you to make http requests
        // promise: do asynchronous requests in JavaScript
        if (city) {
            axios
            .get(URL)
            .then(function(response) {
                // successful request, set as weather data
                setWeatherData(response.data);
            })
            .catch(function(error) {
                // handle error
                console.warn(error);
            });
        }
    }, [URL, city]); // run every time city changes

    const { currentTemp, highTemp, lowTemp, humidity, windSpeed, cloudiness, weatherType } = useMemo(() => {
        if (!weatherData) return {};
        console.log(weatherData);
        return ({
            currentTemp: Math.round(weatherData.main.temp),
            highTemp: Math.round(weatherData.main.temp_max),
            lowTemp: Math.round(weatherData.main.temp_min),
            humidity: weatherData.main.humidity,
            windSpeed: weatherData.wind.speed,
            cloudiness: weatherData.clouds.all,
            weatherType: weatherData.weather[0].main,
        })
    }, [weatherData]);

    return (
        <main className="App">
            <header>
                <nav className="Navigation">
                <a href='/?city=paris' className={city==="paris" && "Active"}>Paris</a>
                <a href='/?city=tokyo' className={city==="tokyo" && "Active"}>Tokyo</a>
                <a href='/?city=rio' className={city==="rio" && "Active"}>Rio</a>
                <a href='/?city=vancouver' className={city==="vancouver" && "Active"}>Vancouver</a>
                </nav>
            </header>
            <h1>{ city }</h1>
            <WeatherCard
                currentTemp = {currentTemp}
                highTemp = {highTemp}
                lowTemp = {lowTemp}
                humidity = {humidity}
                windSpeed = {windSpeed}
                cloudiness = {cloudiness}
                weatherType = {weatherType}
            />
         </main>
    )
}

export default Home;
import React, { useMemo } from 'react';
import "./App.css";
import Home from './containers/Home';
import WeatherCard from '../components/WeatherCard';

function Home() {
    const { currentTemp, highTemp, lowTemp, humidity, windSpeed, cloudiness, weatherType } = useMemo(() => {
        return ({
            currentTemp = `75`,
            highTemp = `88`,
            lowTemp = `60`,
            humidity = 100,
            windSpeed = `16 mph`,
            cloudiness = 100,
            weatherType: "Cloudy"
        })
    }, []);

    return (
        <main className="App">
            <header>Weather App</header>
            <WeatherCard
                currentTemp = {cloudiness}
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
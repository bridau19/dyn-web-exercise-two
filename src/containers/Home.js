import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from "react-router-dom";
import WeatherCard from '../components/WeatherCard';

const API_KEY = '20a967d762faea373696c39bd126aea2';

// URL Search Params
// localhost:3000/?city=paris

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Home() {
    const [city, setCity] = useState();
    let query = useQuery();

    useEffect(() => {
        const cityValue = query.get('city');
        setCity(cityValue);
    }, []);

    const { currentTemp, highTemp, lowTemp, humidity, windSpeed, cloudiness, weatherType } = useMemo(() => {
        return ({
            currentTemp: `75`,
            highTemp:`88`,
            lowTemp:`60`,
            humidity:100,
            windSpeed:`16 mph`,
            cloudiness:100,
            weatherType: "Cloudy"
        })
    }, []);

    return (
        <main className="App">
            <header>
                <p><a href='/?city=paris'>Paris</a></p>
                <p><a href='/?city=tokyo'>Tokyo</a></p>
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
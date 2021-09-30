import React from "react";

function WeatherCard({
    currentTemp,
    lowTemp,
    cloudiness,
    highTemp,
    weatherType, 
    humidity, 
    windSpeed,
}) {
    return <section className="WeatherCard">
        <p>Weather Type: <strong>{ weatherType }</strong></p>
        
        <p>Low Temp: <strong>{ lowTemp }</strong></p>

        <p>Current Temp: <strong>{ currentTemp }</strong></p>

        <p>cloudiness: <strong>{ cloudiness }</strong></p>

        <p>highTemp: <strong>{ highTemp }</strong></p>

        <p>humidity: <strong>{ humidity }</strong></p>

        <p>Wind Speed: <strong>{ windSpeed }</strong></p>

    </section>;
}

export default WeatherrCard;
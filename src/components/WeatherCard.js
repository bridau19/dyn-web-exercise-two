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
        <p> Current Temperature </p>

        <p><strong>{ currentTemp }°F</strong></p>

        <p>Weather Type: <strong>{ weatherType }</strong></p>
        
        <p>Low Temperature: <strong>{ lowTemp }</strong>°F</p>

        <p>Cloudiness: <strong>{ cloudiness }%</strong> </p>

        <p>High Temperature: <strong>{ highTemp }</strong>°F</p>

        <p>Humidity: <strong>{ humidity }%</strong> </p>

        <p>Wind Speed: <strong>{ windSpeed } mph</strong></p>

    </section>;
}

export default WeatherCard;
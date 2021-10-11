import React from "react";
import WeatherImage from "./WeatherImage"

function WeatherCard({
    currentTemp,
    lowTemp,
    cloudiness,
    highTemp,
    weatherType, 
    humidity, 
    windSpeed,
}) {
    return <section className="WeatherCard" style={{
        backgroundColor: `rgba(222, 240, 255, ${cloudiness / 100})`,
    }}>
        <div className="WeatherImageWrapper"> <WeatherImage weatherType={ weatherType } /> </div>

        <p> Current Temperature </p>

        <p><strong>{ currentTemp }°F</strong></p>

        <div className="WeatherInfoWrapper">
        <p>Weather Type: <strong>{ weatherType }</strong></p>
        
        <p>Low Temperature: <strong>{ lowTemp }</strong>°F</p>

        <p>Cloudiness: <strong>{ cloudiness }%</strong> </p>

        <p>High Temperature: <strong>{ highTemp }</strong>°F</p>

        <p>Humidity: <strong>{ humidity }%</strong> </p>

        <p>Wind Speed: <strong>{ windSpeed } mph</strong></p>
        </div>

    </section>;
}

export default WeatherCard;
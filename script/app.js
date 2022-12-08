let form = document.querySelector('#form');
let temperature = document.querySelector('.temperature');
let maxTemp = document.querySelector('.max-temp');
let minTemp = document.querySelector('.min-temp');
let humidity = document.querySelector('.humidity');
let sunrise = document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');
let windSpeed = document.querySelector('.wind-speed');
let windDegree = document.querySelector('.wind-degree');
let errorMessage = document.querySelector('.error-message')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let cityName = document.querySelector('#city').value;

    main(cityName);
})

// fetching data from weather api

async function main(cityName) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f0c67b873fmshb94634abf5fc6cep184351jsn4b26c58f7e70',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        let fetchWeather = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityName, options)

        let finalResponse = await fetchWeather.json();

        assignData(finalResponse);
    }
    catch(err) {
        showError();
    }
}

const assignData = (finalResponse) => {

    let sunriseUnix = finalResponse.sunrise; //this is unix timestamp and need to converted
    let sunriseDate = new Date(sunriseUnix * 1000);

    let sunsetUnix = finalResponse.sunset; //this is unix timestamp and need to converted
    let sunsetDate = new Date(sunsetUnix * 1000);

    errorMessage.innerHTML = "";
    temperature.innerHTML = `${finalResponse.temp}°C`;
    maxTemp.innerHTML = `Max Temperature: <br> ${finalResponse.max_temp}°C`;
    minTemp.innerHTML = `Min Temperature: <br> ${finalResponse.min_temp}°C`;
    humidity.innerHTML = `Humidity: <br> ${finalResponse.humidity} g.m-3`;
    sunrise.innerHTML = `Sunrise: <br> ${sunriseDate}`;
    sunset.innerHTML = `Sunset: <br> ${sunsetDate}`;
    windSpeed.innerHTML = `Wind Speed: <br> ${finalResponse.wind_speed} m/s`;
    windDegree.innerHTML = `Wind Degree: <br> ${finalResponse.wind_degrees}&#176`;
}

function showError(){
    errorMessage.innerHTML = "Please enter City Name correctly"
    temperature.innerHTML = `-`;
    maxTemp.innerHTML = `-`;
    minTemp.innerHTML = `-`;
    humidity.innerHTML = `-`;
    sunrise.innerHTML = `-`;
    sunset.innerHTML = `-`;
    windSpeed.innerHTML = `-`;
    windDegree.innerHTML = `-`;
}

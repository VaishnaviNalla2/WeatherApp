document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const apiKey = '0aef589ca57ee5cff0cb82a665923d08';
    const weatherResult = document.getElementById('weatherResult');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            const errorData = await response.json();
            weatherResult.innerText = `Error: ${errorData.message || 'City not found, Try again'}`;
        }
    } catch (error) {
        console.error('Fetch error:', error);
        weatherResult.innerText = 'An error occurred while fetching weather data';
    }
});

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

document.getElementById('infoButton').addEventListener('click', () => {
    const infoDescription = document.getElementById('infoDescription');
    if (infoDescription.style.display === 'none') {
        infoDescription.style.display = 'block';
    } else {
        infoDescription.style.display = 'none';
    }
});


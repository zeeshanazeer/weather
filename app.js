document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').innerText = `City: ${data.name}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
            } else {
                document.getElementById('cityName').innerText = 'City not found';
                document.getElementById('temperature').innerText = '';
                document.getElementById('description').innerText = '';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('cityName').innerText = 'Error fetching data';
            document.getElementById('temperature').innerText = '';
            document.getElementById('description').innerText = '';
        });
});

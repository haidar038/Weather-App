const apiKey = "05f85ed9cd6d48d7bd263915232510";
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=";
const searchBox = document.querySelector(".lokasi"); // Ubah pemilihan ini
const btn = document.querySelector(".cek");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
    const response = await fetch(apiUrl + apiKey + `&q=` + city.value + `&aqi=no`); // Ubah city menjadi city.value
    var data = await response.json();

    console.log(data);

    document.getElementById("kota").innerHTML = data.location.name + `, ` + data.location.region + `, ` + data.location.country;
    document.getElementById("temp").innerHTML = "Suhu : " + Math.round(data.current.temp_c) + " °C";
    document.getElementById("humidy").innerHTML = "Kelembaban : " + data.current.humidity + "%";
    document.getElementById("wind").innerHTML = "Kecepatan Angin : " + data.current.wind_kph + " km/h";
    const weather_info = data.current.condition.text;

    if (data.current.condition.text == "Clear") {
        icon.src = "icons/day/slight_touch_happyday.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Sunny") {
        icon.src = "icons/day/slight_touch_happyday.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Cloudy") {
        icon.src = "icons/day/cloudy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Partly cloudy") {
        icon.src = "icons/day/partly_cloudy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Overcast") {
        icon.src = "icons/day/cloudy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Mist") {
        icon.src = "icons/day/mist.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy rain possible") {
        icon.src = "icons/day/partly_cloudy_rain_possible.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy snow possible") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy sleet possible") {
        icon.src = "icons/day/partly_cloudy_sleet_possible.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy freezing drizzle possible") {
        icon.src = "icons/day/patchy_freezing_drizzle_possible.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Thundery outbreaks possible") {
        icon.src = "icons/day/partly_day_storm.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Blowing snow") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Blizzard") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Fog") {
        icon.src = "icons/day/mist.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Freezing fog") {
        icon.src = "icons/day/mist.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy light drizzle") {
        icon.src = "icons/day/light_drizzle.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy light rain") {
        icon.src = "icons/day/partly_cloudy_rain_possible.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Light rain") {
        icon.src = "icons/day/light_drizzle.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate rain at times") {
        icon.src = "icons/day/light_drizzle.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate rain") {
        icon.src = "icons/day/light_drizzle.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Heavy rain at times") {
        icon.src = "icons/day/partly_cloudy_rain_possible.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Heavy rain") {
        icon.src = "icons/day/rainy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Light freezing rain") {
        icon.src = "icons/day/light_freezing_rain.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate or heavy freezing rain") {
        icon.src = "icons/day/light_freezing_rain.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Light sleet") {
        icon.src = "icons/day/patchy_freezing_drizzle_possible.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate or heavy sleet") {
        icon.src = "icons/day/patchy_freezing_drizzle_possible.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy light snow") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Light snow") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy moderate snow") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy moderate snow") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate snow") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy heavy snow") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Heavy snow") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Ice pellets") {
        icon.src = "icons/day/ice_pellets.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate or heavy rain shower") {
        icon.src = "icons/day/rainy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Torrential rain shower") {
        icon.src = "icons/day/rainy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Light sleet showers") {
        icon.src = "icons/day/ice_pellets.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Light sleet showers") {
        icon.src = "icons/day/ice_pellets.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate or heavy sleet showers") {
        icon.src = "icons/day/ice_pellets.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Light snow showers") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate or heavy snow showers") {
        icon.src = "icons/day/snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Light showers of ice pellets") {
        icon.src = "icons/day/ice_pellets.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate or heavy showers of ice pellets") {
        icon.src = "icons/day/ice_pellets.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy light rain with thunder") {
        icon.src = "icons/day/partly_day_storm_rain.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy light rain with thunder") {
        icon.src = "icons/day/partly_day_storm.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Patchy light snow with thunder") {
        icon.src = "icons/day/thnderstorm_snowy.png";
        weather.innerHTML = weather_info;
    } else if (data.current.condition.text == "Moderate or heavy snow with thunder") {
        icon.src = "icons/day/thnderstorm_snowy.png";
        weather.innerHTML = weather_info;
    }
}

// Fungsi ini akan memeriksa apakah tombol "Enter" (kode 13) ditekan.
function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkWeather(searchBox);
    }
}

searchBox.addEventListener("keypress", handleKeyPress);

btn.addEventListener("click", () => {
    checkWeather(searchBox);
});

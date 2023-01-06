
    const input = document.getElementById("input_weather");
    const degree = document.getElementById("degree");
    const weather = document.getElementById("weather_status");
    const windSpeed = document.getElementById("wind_speed");
    const humidity = document.getElementById("humidity_calc");
    const cloudiness = document.getElementById("cloudiness_calc");
    const pressure = document.getElementById("pressure_calc");
    const visibility = document.getElementById("visibility_calc");
    const image = document.getElementById("weather_logo");
    const button = document.getElementById("button");
    const city = document.getElementById("city");
    const body = document.getElementsByTagName("body")[0];

        // getCoordinates()
        const backGround = ["Clear_Weather.jpg","Clouds_weather.jpg","Haze_weather.jpg","Rainy_weather.jpg","Smoky_Weather.webp","Sunny_weather.jpg","Snow_weather.jpg"]
        const weathers = ["Clear.png","Clouds.jpg","Haze.png","Rainy.png","Smokey.png","Sunny.png","Snow.png"]

        init()
        function init(){
            button.addEventListener("click",getCoordinates)
        }

    async function getCoordinates(){
        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=133aca6a3bda2d32fd31c9ab64ad4343`);
        const textData = await getData.text();
        const jsonData = JSON.parse(textData);
        // console.log(jsonData);
        const lon = jsonData.coord.lon;
        const lat = jsonData.coord.lat;

        getWeatherCondition(lon,lat);
    }


    async function getWeatherCondition(lon,lat){
        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=133aca6a3bda2d32fd31c9ab64ad4343`);
        const textData = await getData.text();
        const jsonData = JSON.parse(textData);
        console.log(jsonData);
        const weatherIcon = jsonData.weather[0].icon
        city.innerText = jsonData.name;
        humidity.innerText = `${jsonData.main.humidity}%`;
        const km = jsonData.visibility/1000;
        visibility.innerText = `${km}Km`;
        pressure.innerText = `${jsonData.main.pressure}hPa`;
        const celciouc = jsonData.main.temp - 273.15
        degree.innerHTML = `${celciouc.toFixed(1)}&deg;C`;
        windSpeed.innerText = `${jsonData.wind.speed}kph`
        weather.innerText = jsonData.weather[0].main;
        cloudiness.innerText = `${jsonData.clouds.all}%`
        console.log(weather);
        for(let i=0; i<weathers.length; i++){
            if(weathers[i].includes(weather.innerText)){
                image.setAttribute("src",weathers[i]);
                body.style.background = `url(${backGround[i]})`
                body.style.backgroundSize = "100% 100%"
            }
        }
        
    }
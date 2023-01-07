
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
    const container = document.getElementById("container");
    const left = document.getElementById("left");
    const CurrentDate = document.getElementById("date");
    const CurrentTime = document.getElementById("time");
    const cityHeading = document.getElementById("cityHeading");

        CurrentDate.innerText = `Date: ${new Date().toUTCString().slice(5, 16)}`;

    

        // getCoordinates()
        const backGround = ["Clear_Weather.jpg","Clouds_weather.jpg","Haze_weather.jpg","Rainy_Day_image.jpg","Smoke_Weather.webp","Sunny_weather.jpg","Snow_weather.jpg","Mist_weather.jpg"];
        const weathers = ["Clear.png","Clouds.jpg","Haze.png","Rainy.png","Smoke.png","Sunny.png","Snow.png","Mist.png"];


        const nightBackGround = ["Clear_night.jpg","clouds_night.jpg","Haze_night_img.jpg","Rainy_night_image.jpg","Smoke_night_image.jpg","Clear_night_image.jpg","Snow_night_image.jpg","Mist_night_image.jpg","Fog_night_image.jpg"]
        const nightIcon = ["Clear_night_icon.jpg","Clouds_night.png","Haze_night_logo.png","Rainy_night_logo.png","smoke_night_logo.png","Clear_night_icon.jpg","Snow_night_logo.webp","Mist.png","Fog_logo.png"]

        

        
        init()
        function init(){
            addEventListener("keyup",(event) => {
                if(event.key === "Enter"){
                    getCoordinates()
                }
            })
            
            button.addEventListener("click",getCoordinates)
        }

    async function getCoordinates(){
        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=133aca6a3bda2d32fd31c9ab64ad4343`); //Requesting To Server For Data.
        const textData = await getData.text(); //Converting Fetched Data In Text Formate.
        const jsonData = JSON.parse(textData); //Converting Text Into Object.
        console.log(jsonData);
        
        let date = new Date(); //Current Time,Date,Day,Month,Year.
        let currDate = `${date.getUTCDate()}:${date.getUTCMonth()+1}:${date.getUTCFullYear()}`
        console.log(currDate);

        let time = date.getHours();
        time = time;
        console.log(typeof time,time);
        let currTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
        console.log(currTime);



        const weatherIcon = jsonData.weather[0].icon
        city.innerText = `${jsonData.name},${jsonData.sys.country}`;
        humidity.innerText = `${jsonData.main.humidity}%`;
        const km = jsonData.visibility/1000;
        visibility.innerText = `${km.toFixed(1)}Km`;
        pressure.innerText = `${jsonData.main.pressure}hPa`;
        const celciouc = jsonData.main.temp - 273.15
        degree.innerHTML = `${celciouc.toFixed(1)}&deg;C`;
        windSpeed.innerText = `${jsonData.wind.speed}kph`
        weather.innerText = jsonData.weather[0].main;
        cloudiness.innerText = `${jsonData.clouds.all}%`
        // console.log(weather);
        

        if(time>=5 && time<=18){
            
        }else{
            container.style.backgroundColor = "rgba(0, 0, 0, 0.598)";
            left.style.backgroundColor = "rgba(0, 0, 0, 0.550)"
        }
        if(time>=5 && time<=18){
            for(let i=0; i<weathers.length; i++){
                if(weathers[i].includes(weather.innerText)){
                    image.setAttribute("src",weathers[i]);
                    body.style.background = `url(${backGround[i]})`
                    body.style.backgroundSize = "100% 100%";
                    weather.style.color = "navy";
                    windSpeed.style.color = "navy";
                    humidity.style.color = "navy";
                    cloudiness.style.color = "navy";
                    pressure.style.color = "navy";
                    visibility.style.color = "navy";
                    CurrentTime.style.color = "navy";
                    CurrentDate.style.color = "navy";
                    city.style.color = "navy";
                    cityHeading.style.color = "navy";
                }
            }
        }else{
            for(let i=0; i<nightIcon.length; i++){
                if(nightIcon[i].includes(weather.innerText)){
                    image.setAttribute("src",nightIcon[i]);
                    body.style.background = `url(${nightBackGround[i]})`
                    body.style.backgroundSize = "100% 100%";
                    degree.style.color = "rgb(110,125,138)";
                }
            }
        }
    }
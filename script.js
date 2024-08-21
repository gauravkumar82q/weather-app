    const apiKey = "5dee691aeb352eacf0216894adc6b46a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon=document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }else{var data = await response.json();
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
            if(data.weather[0].main =="Clouds"){
                weatherIcon.src = "images/clouds.png"

            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src ="images/clear.png"}
            else if(data.weather[0].main=="Rain"){
                weatherIcon.src="images/rain.png"
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="images/drizzle.png";
            }
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src = "images/mist.png"
            }
            document.querySelector(".weather").style.display="block"}
            
        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });
        searchBox.addEventListener("keypress", function(e) {
            if (e.key ===  'Enter'){
            checkWeather(searchBox.value);}
        });

      
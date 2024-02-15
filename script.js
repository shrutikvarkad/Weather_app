async function fetchweatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5be25f8cb37158af887e70311f37211f`
    const response = await fetch(url)
    const data = await response.json();
    let city =document.getElementById("city");
    city.innerHTML= data.name;
    let windSpeed = document.getElementById("wind_speed");
    windSpeed.innerHTML = data.wind.speed + "km/hr";
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = data.main.humidity+" g/kg";
    let temp = document.getElementById("temp");
    temp.innerHTML = Math.round((data.main.temp) - 273.15)+ "°C";
    console.log(data.name)
}


function fetchCity(){
	let cityName = document.getElementById("cityname");
	if(cityName.value===""){
		alert("Enter a City name");
	}else{
		fetchweatherData(cityName.value);
		cityName.value="";
	}
}
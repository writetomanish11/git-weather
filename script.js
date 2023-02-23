const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73d28ae10bmsh21285da371674edp1fb7dajsna77040a3ff75',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
	const c = document.getElementById('city').value
 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +c, options)
	.then(response => response.json())
	.then((response)=>{

      console.log(response)
	  document.getElementById('temp').innerHTML = '<strong>'+response.temp+'</strong>'
	  document.getElementById('Min_temp').innerHTML = '<strong>'+response.min_temp+'</strong>'
	  document.getElementById('Max_temp').innerHTML = '<strong>'+response.max_temp+'</strong>'
	  document.getElementById('cloud_pct').innerHTML = '<strong>'+response.cloud_pct+'</strong>'
	  document.getElementById('feel_like').innerHTML = '<strong>'+response.feels_like+'</strong>'
	  document.getElementById('humadity').innerHTML = '<strong>'+response.humidity+'</strong>'
	  document.getElementById('wind_degrees').innerHTML = '<strong>'+response.wind_degrees+'</strong>'
	  document.getElementById('wind_speed').innerHTML = '<strong>'+response.wind_speed+'</strong>'
	  document.getElementById('sunrise').innerHTML = '<strong>'+response.sunrise+'</strong>'
	  document.getElementById('sunset').innerHTML = '<strong>'+response.sunset+'</strong>'

	  cloud_pct.innerHTNL= response.cloud_pct
	  temp.innerHTNL=response.temp
	  feels_like.innerHTNL=response.feels_like
	  humidity.innerHTNL=response.humidity
	  min_temp.innerHTNL=response.min_temp
	  max_temp.innerHTNL=response.max_temp
	  wind_speed.innerHTNL=response.wind_speed
	  wind_degrees.innerHTNL=response.wind_degrees
	  sunrise.innerHTNL=response.sunrise
	  sunset.innerHTNL=response.sunset

	})
	.catch(err => console.error(err));
	

}
// submit.addEventListener("click",(e)=>{
// 	e.preventDefault()
// 	getWeather(city.value)
// })

getWeather("Delhi") 


 
const weatherD = document.getElementById("findWeather");

weatherD.addEventListener('click', function() {
  const weatherS = document.getElementById("city-input"); 
    console.log('vas =>', weatherS.value)
   
 fetch("https://api.openweathermap.org/data/2.5/weather?q=" 

 + weatherS.value +  
    
 "&appid=4f8691a38789a153bd631e25a96a113f&units=imperial")

 .then(response => response.json())
 .then(data => {
     
   
const cityVal = data['name'];
const windVal = data.wind['speed'];
const humVal =  data.main["humidity"];
const tempVal = data.main["temp"];


  document.getElementById("city").innerHTML = cityVal;
  document.getElementById("wind").innerHTML = windVal + "mph";
  document.getElementById("humidity").innerHTML = humVal +"%";
  document.getElementById("temp").innerHTML = tempVal + "F";

 })

 .catch(err => console.log("err", err))

});





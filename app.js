// const async = require("hbs/lib/async");

const submitbutton = document.querySelector(".submit");
const cityName = document.querySelector(".cityName");
const temperature = document.querySelector(".temperature");

const getInfo = async(event) =>{
    event.preventDefault();
    // alert("hii");
    let cityVal = cityName.value;
    // console.log(cityVal);
    if (cityVal === "") {
        temperature.innerText = `Please write city name first`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c7beba05c6ac71489d68b8c5099dd62b&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            temperature.innerText = `${arrdata[0].main.temp}°C, ${arrdata[0].sys.country}`;
            
        } catch {
            temperature.innerText = `Please enter correct city name`;
        }
    }
}

cityName.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submitbutton").click();
    }
  });

submitbutton.addEventListener("click", getInfo)
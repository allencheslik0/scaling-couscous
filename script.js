var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var nameEl = document.querySelector('.city-name');
var descriptionEl = document.querySelector('.description');
var temperatureEl = document.querySelector('.temperature');


button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&524901&appid=95d25656c865f0b0125b6ad3ef11eab0')
        .then(Response => Response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descriptionValue = data['weather'][0]['description'];

            nameEl.innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + nameValue + " | ";
            temperatureEl.innerHTML = Math.floor(tempValue) + "°";
            descriptionEl.innerHTML = descriptionValue + " | ";

        });
});
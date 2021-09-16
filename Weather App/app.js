window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;
           
           const proxy = "https://cors-anywhere.herokuapp.com/";
           const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=84cdb70b7c1fe5c8ffab933c10b40a5c`;
    

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                const {description} = data.weather[0];
                const {name} = data;
                const {temp} = data.main;

                let degreeConvertion = Math.round((temp - 273.15),2);
                locationTimezone.textContent = name;
                temperatureDescription.textContent = description;
                temperatureDegree.textContent = degreeConvertion;
            });

        });



    }
    else{
        h1.textContent = 'Рэгіён не вызначаны';
    };



});
window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;
           
           const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=84cdb70b7c1fe5c8ffab933c10b40a5c`;
    

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data);
            })

        });



    }
    else{
        h1.textContent = 'Рэгіён не вызначаны';
    };



});
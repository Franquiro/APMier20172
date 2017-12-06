$(document).ready(function () {
    $('#submit').click(function () {
        var cityName = $('#input').val();
        if (cityName != '') {
            var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=ffa1dcdd05ebf6c4cebf570d44ba850b";

            $.ajax({
                url: weatherURL,
                success: function (result) {
                    var main = result.main;
                    var wind = result.wind;
                    var sys = result.sys;
                    var name = result.name;
                    var visibility = result.visibility;
                    var coord = result.coord;

                    document.getElementById("location").innerHTML = ""+name + "," + sys.country;
                    document.getElementById("temp").innerHTML = parseInt(main.temp) + "ºC";
                    document.getElementById("temp_min").innerHTML = parseInt(main.temp_min) + "ºC";
                    document.getElementById("temp_max").innerHTML = parseInt(main.temp_max) + "ºC";
                    document.getElementById("speed").innerHTML = wind.speed + "m/s";
                    document.getElementById("visibility").innerHTML = visibility + "M";
                    document.getElementById("humidity").innerHTML = main.humidity + '%';
                    document.getElementById("pressure").innerHTML = main.humidity + 'hPa';
                    document.getElementById("locationlonlan").innerHTML = coord.lon + "," + coord.lat;
                    document.getElementById("input").value = "";
                }
            })
        }
        else{location.reload();}
    })
});

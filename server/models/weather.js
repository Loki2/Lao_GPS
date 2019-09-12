const request = require('request-promise');
const API_KEY = `bf38b22dec19647a9ce164ece9711855`;

class Weather {
    static retriveByCity(city, callback) {
        request({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({ error: 'Cloud not reach Open Weather Map API...!' });
        })
    }
}
module.exports = Weather;
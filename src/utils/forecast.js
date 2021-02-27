const request = require('postman-request');


const forecast = (lattitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c4c28d7748c4402eaceb25923a6ac7bf&query=${lattitude + ',' + longitude}&units=m`
    request({ url, json: true }, (error, res, body) => {
        if (error) {
            callback('Unable to connect to API', undefined)

        } else if (body.success === false) {
            callback((body.error.info), undefined);

        } else {
            callback(undefined, `current weather:  ${body.current.weather_descriptions}.It is currently ${body.current.temperature} degrees out.It feels like ${body.current.feelslike} degrees out`);
        }
    })

}



module.exports = forecast;
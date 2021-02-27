const request = require('postman-request');


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicmFpc2gxMDEiLCJhIjoiY2tsZ3dtazZ3MXloZTJxbzNzY2dyaHB2MCJ9.RY8VJ7SJ1SDLH0gAcgHBzg`

    request({ url: url, json: true }, (err, res, body) => {
        if (err) {
            callback(('Unable to connect to API'), undefined);
        } else if (body.features.length === 0) {
            callback(('Invalid location values'), undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name

            })
        }
    })
}

module.exports = geocode;
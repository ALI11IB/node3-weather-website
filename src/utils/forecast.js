const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a2f295fe851b8ed31b27609428826c37/' + latitude + ',' + longitude
    request( {url, json : true}, (error, { body }) => {
        if(error){
            callback('unable to connect to weather service', undefined)
        }else if(body.error){
            callback('unable to find location', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + 'it is currently ' + body.currently.temperature + 'degrees out. ' + 'there is a ' +body.currently.precipProbability + '% chance of rain.')
        }

    })



}


module.exports = forecast
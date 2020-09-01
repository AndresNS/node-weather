const request = require("postman-request");

const forecast = (location, callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=5cfede3e592ebc4724a246eab2109997&query="+location;

    request({
            url: url,
            json: true
        },
        (error, response) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined);
            } else if (response.body.error) {
                callback('Unable to find location', undefined);
            } else {
                const temp = response.body.current.temperature;
                const rain = response.body.current.precip;
                const time = response.body.current.observation_time;
                callback(undefined, `${time} - It is currently ${temp} degrees out. There is a ${rain} chance of rain.`);
            }
        });
};

module.exports = forecast
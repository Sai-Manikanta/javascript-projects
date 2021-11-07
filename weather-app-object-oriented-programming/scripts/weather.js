class Forecast {
    constructor(){
        this.key = 'mZ4lVX3pcMYMeJOHjxuJ1wNFQkbwzHAd';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async updateWeather(cityName){
        const city = await this.getCity(cityName);
        const weather = await this.getWeather(city.Key);

        return { city, weather }
    }
    async getCity(city){
        const res = await fetch(this.cityURI + `?apikey=${this.key}&q=${city}`);
        const data = await res.json(); 
        return data[0];
    }
    async getWeather(cityKey){
        const res = await fetch(this.weatherURI + `${cityKey}?apikey=${this.key}`);
        const data = await res.json();
        return data[0]
    }
}
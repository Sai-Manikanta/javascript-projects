const apikey = 'mZ4lVX3pcMYMeJOHjxuJ1wNFQkbwzHAd';

const getCity = async (city) => {
    const baseURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const queryString = `?apikey=${apikey}&q=${city}`;

    const res = await fetch(baseURI + queryString);
    const data = await res.json();

    return data[0]
}

const getWeather = async (cityKey) => {
    const baseURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const queryString = `${cityKey}?apikey=${apikey}`;

    const res = await fetch(baseURI + queryString);
    const data = await res.json();

    return data[0]
}
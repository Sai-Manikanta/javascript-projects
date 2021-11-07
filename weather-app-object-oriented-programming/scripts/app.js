const card = document.querySelector('.card');

const forecast = new Forecast();

const createTemplate = async (cityName) => {

    const { city, weather } =  await forecast.updateWeather(cityName);

    const dayOrNightImage = weather.isDayTime ? 'img/day.svg' : 'img/night.svg';
    const weatherIcon = `img/icons/${weather.WeatherIcon}.svg`;

    const template = `
        <img src="${dayOrNightImage}" alt="weather" class="w-full">
        <img src="${weatherIcon}" alt="weather icons" class="border mx-auto bg-gray-100 rounded-full relative -top-14 -mb-14">
        <h2 class="mt-4 text-xl">${city.EnglishName}</h2>
        <p class="mt-1 text-sm">${weather.WeatherText}</p>
        <p class="my-5 text-4xl tracking-widest font-extralight">
            TEMP ${weather.Temperature.Metric.Value}&#176;C
        </p>
    `;

    card.innerHTML = template;

    if(card.classList.contains('hidden')){
        card.classList.remove('hidden');
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    createTemplate(form.city.value.trim());
    form.reset();
})
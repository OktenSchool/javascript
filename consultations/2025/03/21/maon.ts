interface Temps {
    morning: string,
    noon: string,
    evening: string
}


interface Forecast {
    day: string,
    temps: Temps
}

type Forecasts = Forecast[];

let week_weather: Forecasts = [
    {day: 'monday', temps: {morning: 'cloudy', noon: 'cloudy', evening: 'rain'}},
    {day: 'tuesday', temps: {morning: 'cloudy', noon: 'clear', evening: 'clear'}},
    {day: 'wednesday', temps: {morning: 'cloudy', noon: 'clear', evening: 'clear'}},
    {day: 'thursday', temps: {morning: 'clear', noon: 'cloudy', evening: 'rainy'}},
    {day: 'friday', temps: {morning: 'rainy', noon: 'cloudy', evening: 'rainy'}},
    {day: 'saturday', temps: {morning: 'cloudy', noon: 'clear', evening: 'clear'}},
    {day: 'sunday', temps: {morning: 'clear', noon: 'clear', evening: 'cloudy'}}
]

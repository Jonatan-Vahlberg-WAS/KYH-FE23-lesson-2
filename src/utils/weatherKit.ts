

class WeatherKit {
    private static readonly apiKey: string = process.env.WEATHER_API_KEY || process.env.NEXT_PUBLIC_WEATHER_API_KEY || "";
    private static readonly baseURL: string = "https://api.openweathermap.org/data/2.5/"

    static getApiKeyOrThrow() {
        if(!this.apiKey) {
            throw new Error("API Key not found in environment variables")
        }
        return this.apiKey
    }

    static async getWeatherFromCity(city: string): Promise<any> {
        const response = await fetch(`${this.baseURL}weather?q=${city}&appid=${this.getApiKeyOrThrow()}&units=metric`, {
            headers: {
                type: "application/json",
            }
        })

        if(!response.ok) {
            console.log("ERROR: fetching weather", response)
            throw new Error("Unable to fetch weather")
        }

        const data: any = await response.json()

        data.iconURL = this.getWeatherIconURL(data.weather[0].icon)
        data.backgroundURL = this.getWeatherBackgroundURL(data.weather[0].main)

        return data
    }

    static getWeatherIconURL(icon: string): string {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`
    }

    static getWeatherBackgroundURL(weather: string): string {
        switch(weather) {
            case "Clouds":
                return "/backgrounds/clouds.jpg"
            case "Rain":
                return "/backgrounds/rain.jpg"
            case "Drizzle":
                return "/backgrounds/drizzle.jpg"
            case "Thunderstorm":
                return "/backgrounds/thunder.jpg"
            case "Snow":
                return "/backgrounds/snow.jpg"
            case "Clear":
            default:
                return "/backgrounds/clear.jpg"
        }
    }
}

export default WeatherKit;
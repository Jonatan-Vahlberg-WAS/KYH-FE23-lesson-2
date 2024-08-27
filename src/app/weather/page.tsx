import WeatherCard from "@/components/WeatherCard";

export async function getWeatherFromCity(city: string) {
    const url = new URL("http://localhost:3000/api/weather");
    url.searchParams.append("city", city);
    const response = await fetch(
        `http://localhost:3000/api/weather?city=${city}`
    );
    if (!response.ok) {
        console.log("ERROR: fetching weather", response);
        return null;
    }
    const data = await response.json();

    return data;
}

export default async function Weather({ searchParams }: PageProps) {
  const { city } = searchParams;

  const weather: WeatherResponse = await getWeatherFromCity(city);
  console.log("weather", weather);
  console.log("city", city);

  const background = weather?.backgroundURL || "/backgrounds/clear.jpg";
  return (
    <main
      className="container-fluid h-screen w-full bg-white  bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay bg-black bg-opacity-50 h-full w-full flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl text-white">Weather</h1>
        <form className="flex flex-col items-center justify-center gap-2">
          <input
            name="city"
            type="text"
            placeholder="City"
            className="p-2 rounded-md"
            defaultValue={city}
          />
          <button className="p-2 bg-blue-500 text-white rounded-md">
            Search
          </button>
        </form>
        <WeatherCard weather={weather} city={city} />
        {weather && weather.weather.length > 1 && (
            <div className="text-white">
                <h2 className="text-2xl text-white">
                    Extra weather info
                </h2>
                {weather.weather.map((w, i) => {
                if(i === 0) return null;
                return (
                    <WeatherCard key={i} weather={weather} city={city} />
                )
            })}
            </div>
        )}
      </div>
    </main>
  );
}

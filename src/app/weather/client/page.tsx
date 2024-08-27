"use client";

import WeatherCard from "@/components/WeatherCard";
import WeatherKit from "@/utils/weatherKit";
import { useEffect, useState } from "react";

export default function Weather({ searchParams }: PageProps) {
  const [cityText, setCityText] = useState<string>("");
  const [city, setCity] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    if(city) {
      getWeather(city);
    }
  }, [city]);

  const getWeather = async (city: string) => {
    try {
      const weather = await WeatherKit.getWeatherFromCity(city);
      setWeather(weather);
    } catch (error) {
      console.warn("Error: fetching weather", error);
    }
  }
  const background = weather?.backgroundURL || "/backgrounds/clear.jpg";
  return (
    <main
      className="container-fluid h-screen w-full bg-white  bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay bg-black bg-opacity-50 h-full w-full flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl text-white">Weather</h1>
        <form className="flex flex-col items-center justify-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            setCity(cityText);
          }}>
          <input
            name="city"
            type="text"
            placeholder="City"
            className="p-2 rounded-md"
            value={cityText}
            onChange={(e) => setCityText(e.target.value)}
          />
          <button className="p-2 bg-blue-500 text-white rounded-md"
            onClick={(e) => {
              e.preventDefault();
              setCity(cityText);
            }}
          >
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

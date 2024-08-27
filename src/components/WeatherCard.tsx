type WeatherCardProps = {
  weather: WeatherResponse | null;
  city: string | null;
};

function WeatherCard({ weather, city }: WeatherCardProps) {
  return (
    <div className="card bg-white bg-opacity-50 p-3 rounded-md w-96 border-4 border-white">
      {weather && (
        <div className="card-content flex flex-col items-center gap-2">
          <h2 className="text-2xl">{weather?.name}</h2>
          <h3 className="text-lg">{weather?.weather[0].description}</h3>
          <img src={weather?.iconURL} alt={weather?.weather[0].description} />
          <p>Temperature: {weather?.main.temp}°C</p>
          <p>Feels like: {weather?.main.feels_like}°C</p>
          <p>Humidity: {weather?.main.humidity}%</p>
          <p>Wind speed: {weather?.wind.speed} m/s</p>
        </div>
      )}
      {!weather && city && (
        <div className="text-white">No weather found for {city}</div>
      )}
      {!city && <div className="text-white">No city found</div>}
    </div>
  );
}

export default WeatherCard;

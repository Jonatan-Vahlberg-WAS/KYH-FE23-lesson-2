type WeatherCardProps = {
  weather: WeatherResponse | null;
  city: string | null;
};

function WeatherCard({ weather, city }: WeatherCardProps) {
  // Get time from weather data dt + timezone + change from utc to local time
  const time = getTimeInLocalTime(weather?.dt, weather?.timezone);
  return (
    <div className="card bg-white bg-opacity-60 p-3 rounded-md w-96 border-4 border-white">
      {weather && (
        <div className="card-content flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold">{weather?.name}</h2>
          <h3 className="text-lg underline">{weather?.weather[0].description}</h3>
          <img src={weather?.iconURL} alt={weather?.weather[0].description} />
          <p>
            <strong>Temperature:</strong> {weather?.main.temp}°C
          </p>
          <p>
            <strong>Feels like:</strong> {weather?.main.feels_like}°C
          </p>
          <p>
            <strong>Humidity:</strong> {weather?.main.humidity}%
          </p>
          <p>
            <strong>Wind speed:</strong> {weather?.wind.speed} m/s
          </p>
          {time && (
            <p>
              <strong>Time:</strong> {time}
            </p>
          )}
        </div>
      )}
      {!weather && city && (
        <div className="text-white">No weather found for {city}</div>
      )}
      {!city && <div className="text-white">No city found</div>}
    </div>
  );
}

function getTimeInLocalTime(time?: number, timezone?: number) {
  //Time will be utc and in seconds, so convert to milliseconds¨
  if (!time || !timezone) return null;
  let date = new Date((time + timezone - 3600 * 2) * 1000);
  return date.toLocaleString();
}

export default WeatherCard;

type Movie = {
  title: string;
  year: number;
  type: "movie";
  id: string;
  director: string;
  leadActor: string;
};

type TvShow = {
  title: string;
  year: number;
  type: "tv-show";
  id: string;
  seasons: number;
  averageRating?: number;
};

type MiniSeries = TvShow & {
  seasons: 1;
  episodeRuntime: number;
};

type IMBDResponse = Movie | TvShow | MiniSeries;

const response: IMBDResponse[] = [
  {
    title: "Harry potter 1",
    year: 2001,
    type: "movie",
    id: "1",
    director: "Chris Columnbus",
    leadActor: "Daniel Radcliffe",
  },
  {
    title: "GOT",
    year: 2011,
    type: "tv-show",
    id: "22",
    seasons: 8,
    averageRating: 9.2,
  },
  {
    title: "Chernobyl",
    year: 2019,
    type: "tv-show",
    id: "23",
    averageRating: 9.4,
    seasons: 1,
    episodeRuntime: 60,
  },
];

function isMovie(data: IMBDResponse): data is Movie {
  return data.type === "movie";
}

function isTvShow(data: IMBDResponse): data is TvShow {
  return data.type === "tv-show";
}

function isMiniSeries(data: IMBDResponse): data is MiniSeries {
  return data.type === "tv-show" && data.seasons === 1;
}

export default function ImbdPage() {
  return (
    <main className="h-screen bg-gray-800 text-white">
      <section className="container mx-auto">
        <h1>IMBD</h1>
        <div className="flex flex-col gap-3">
          {response.map((data) => (
            <div key={data.id} className="bg-gray-50 text-gray-900 p-3 rounded-md">
              <h2>{data.title}</h2>
              <p>{data.year}</p>
              <ul className="list-disc details">
                {isMovie(data) && (
                  <>
                    <li>Director: {data.director}</li>
                    <li>Lead actor: {data.leadActor}</li>
                  </>
                )}
                {isTvShow(data) && (
                  <>
                    <li>Seasons: {data.seasons}</li>
                    <li>Rating AVG: {data.averageRating}</li>
                    {isMiniSeries(data) && (
                      <>
                        <li>Episode runtime: {data.episodeRuntime}</li>
                      </>
                    )}
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

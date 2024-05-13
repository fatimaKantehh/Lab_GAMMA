type Movie = {
  id: number;
  title: string;
  releaseYear: string;
};

export default async function Movies({}) {
  const responde = await fetch("https://reactnative.dev/movies.json", {
    method: "GET",
  });

  const data = await responde.json();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-2xl font-bold">Movies !</h1>
      <div className="grid grid-flow-col gap-4">
        {data.movies.map((movie: Movie) => {
          return (
            <div key={movie.id} className="bg-white rounded-lg shadow-lg p-4">
              <h1 className="text-xl font-bold">{movie.title}</h1>
              <p className="text-pink-800">{movie.releaseYear}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

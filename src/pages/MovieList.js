import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);
  return (
    <section className="max-w-7xl mx-auto py-7 bg-slate-800">
      <div className="flex justify-start flex-wrap ">
        {movies.map((movie, key) => (
          <Card
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            id={movie.id}
          />
        ))}
      </div>
    </section>
  );
};

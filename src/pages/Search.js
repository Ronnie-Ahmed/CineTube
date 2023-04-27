import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

import { useSearchParams } from "react-router-dom";

export const Search = (apiPath) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  // useTitle(`Search result for ${queryTerm}`);

  return (
    <>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
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
      ;
    </>
  );
};

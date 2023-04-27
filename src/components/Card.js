import React from "react";
import { Link, useLocation } from "react-router-dom";
import image2 from "./3.jpg";

export const Card = (movie) => {
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : image2;

  let movieurl;
  const location = useLocation();
  console.log(location.pathname);
  if (
    location.pathname === "/movie/popular" ||
    location.pathname === "/" ||
    location.pathname === "/movie/top_rated" ||
    location.pathname === "/movie/upcoming" ||
    location.pathname === "/trending/all/day"
  ) {
    movieurl = `/movie/${movie.id}`;
  }
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={movieurl}>
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={movieurl}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
        </div>
      </div>
    </>
  );
};

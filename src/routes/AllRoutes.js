import React from "react";
import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, Search, PageNotFound } from "../pages";
export const AllRoutes = () => {
  return (
    <div className="bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route
          path="movie/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        />
        <Route
          path="movie/top_rated"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movie/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route
          path="trending/all/day"
          element={<MovieList apiPath="trending/all/day" title="Trending" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

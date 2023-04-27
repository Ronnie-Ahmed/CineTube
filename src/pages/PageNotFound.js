import React from "react";
import imagepage from "../components/not found.jpg";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            Oops!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={imagepage} alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="bg-gradient-to-r rounded-md from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Back To CineTube
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

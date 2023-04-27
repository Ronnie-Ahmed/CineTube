import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white  shadow  dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="https://flowbite.com/" className="hover:underline">
              Created By Ronnie Ahmed
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100055837221296"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/raisul-islam-3bb290271/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:underline md:mr-6"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

import React from "react";

const DisplayUsers = ({ user }) => {
  const { name, picture, location } = user;
  return (
    <>
      <div class="dark:hover:bg-gray-900 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">
        <div class="flex flex-col items-center pb-10 pt-10">
          <img
            class="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={picture?.large}
            alt={`Picture of ${name.first} ${name.last}`}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name.title}. {name.first} {name.last}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {location.country}
          </span>
        </div>
      </div>
    </>
  );
};

export default DisplayUsers;

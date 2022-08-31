import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import DisplayUsers from "./DisplayUsers";

const PhaseFinal = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  // Pagination
  // Append New User Info as we fetch new user info.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api");
        const results = await response.json();
        setUsers(results);
      } catch (err) {
        console.error(`Bugs...🐛: ${err}`);
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  if (users.length <= 0)
    return (
      <>
        <h1 className="mb-12">
          Final Phase | Pagination &amp; Appending Users
        </h1>
        <Loading />
      </>
    );

  return (
    <>
      <ul>
        {users.results?.map((user, idx) => (
          <DisplayUsers key={idx} user={user} />
        ))}
      </ul>
      <button
        onClick={() => {
          console.log("clicked");
        }}
        type="button"
        className="mt-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Load Another User
      </button>
    </>
  );
};

export default PhaseFinal;

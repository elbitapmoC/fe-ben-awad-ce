import { useState, useEffect } from "react";

const PhaseTwo = () => {
  const [data, setData] = useState("");

  // Given an API of:
  // https://randomuser.me/api

  // 1. Fetch the API ^
  // response - Response object.
  // It doesn't contain JSON, it's a rep for the HTTP response.
  // json returns a second promise, containing our results.

  // 2. Display as a string the info sent in from API.
  // If you want to use the result from the asynchronous code, you should do so inside the fetchAndLogAsyncAwait function, not outside.
  // Async Await ------------------------------------ START
  const fetchAndLogAsyncAwait = async () => {
    try {
      const response = await fetch("https://randomuser.me/api");
      const json = await response.json();
      const stringJSON = JSON.stringify(json, null, 2); // Send pretty formatted JSON
      // setData has to be INSIDE the useEffect.
      setData(stringJSON);
    } catch (err) {
      console.error(err);
    }
  };
  // Async Await ------------------------------------ END

  useEffect(() => {
    fetchAndLogAsyncAwait() // make sure to catch any error
      .catch(console.error("🤧 C19 is worse."));
  }, []);
  return (
    <>
      <h1 className="mb-12">PhaseTwo | Fetch the API</h1>
      <pre>{data}</pre>
    </>
  );
};

export default PhaseTwo;

import React from "react";

const PhaseTwo = () => {
  // Given an API of:
  // https://randomuser.me/api

  // 1. Fetch the API ^
  // response - Response object.
  // It doesn't contain JSON, it's a rep for the HTTP response.
  // json returns a second promise, containing our results.

  // METHOD 1 | Async/Await ------------------------------------ START
  // const fetchAndLogAsyncAwait = async () => {
  //   const response = await fetch("https://randomuser.me/api");
  //   const json = await response.json();
  //   console.log(json);
  // };
  // fetchAndLogAsyncAwait();
  // METHOD 1 | Async/Await ------------------------------------ END

  // METHOD 2 | Promises ------------------------------------ START
  const fetchAndLogPromise = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  fetchAndLogPromise();
  // METHOD 2 | Promises ------------------------------------ END

  // 2. Display as a string the info sent in from API.

  return <div>PhaseTwo</div>;
};

export default PhaseTwo;

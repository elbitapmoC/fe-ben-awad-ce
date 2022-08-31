import { useEffect, useState } from "react";
import DisplayUsers from "./DisplayUsers";
import Loading from "./Loading";

const PhaseThree = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://randomuser.me/api");
        const results = await response.json();
        setUsers(results);
      } catch (err) {
        console.error(`Bugs...🐛: ${err}`);
      }
    }
    fetchData();
  }, []);

  if (users.length <= 0)
    return (
      <>
        <h1 className="mb-12">PhaseThree | Outputting User Data</h1>
        <Loading />
      </>
    );

  return (
    <>
      <h1 className="mb-12">PhaseThree | Outputting User Data</h1>
      {users.results.map((user, i) => (
        <DisplayUsers key={i} user={user} />
      ))}
    </>
  );
};

export default PhaseThree;

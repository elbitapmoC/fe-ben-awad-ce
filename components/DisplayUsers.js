import React from "react";

const DisplayUsers = ({ user }) => {
  const { name, picture } = user;
  return (
    <li className="list-none flex-col">
      <img
        className="m-auto mb-4"
        src={picture?.large}
        alt={`Picture of ${name.first} ${name.last}`}
      />
      <p>{`${name.title}. ${name.first} ${name.last} `}</p>
    </li>
  );
};

export default DisplayUsers;

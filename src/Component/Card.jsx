import React from "react";

const Card = () => {
  const data = [
    {
      img: "https://i.ibb.co/VVKb0wJ/download-1.jpg",
    },
  ];
  fetch(
    "https://assignment-server-side10-3vbvizkrt-bushrajahans-projects.vercel.app/user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return <div></div>;
};

export default Card;

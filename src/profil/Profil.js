import React from "react";

const Profil = ({ PP }) => {
  let fname = "Walid Semmar";
  let bio = "je suis etudiant";
  let profession = "Fullstack js";
  function handlename() {
    alert(`Bienvenu ${fname}`);
  }
  return (
    <div>
      <img onLoad={handlename()} src={PP} alt=""></img>
      <h1>{fname}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
    </div>
  );
};

export default Profil;

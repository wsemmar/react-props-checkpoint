import React from "react";
import PropTypes from "prop-types";

const Profil = (props) => {
  let fname = "Walid Semmar";
  let bio = "je suis etudiant";
  let profession = "Fullstack js";
  function handlename() {
    alert(`Bienvenu ${fname}`);
  }
  Profil.propTypes = {
    fname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
  };
  return (
    <div onLoad={handlename}>
      {props.children}
      <h1>{fname}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
    </div>
  );
};

export default Profil;

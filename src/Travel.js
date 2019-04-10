import React from "react";

const Travel = ({ quote, character,country,distance, image }) => (
  <figure>
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <blockquote>{country}</blockquote>
      <blockquote>{distance}</blockquote>
      <cite>{character}</cite>
      
    </figcaption>
  </figure>
);

export default Travel;
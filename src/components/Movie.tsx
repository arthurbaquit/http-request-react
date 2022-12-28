import React from "react";

import classes from "./Movie.module.css";
export interface MovieProps {
  id: number;
  title: string;
  openingText: string;
  releaseDate: string;
}

const Movie = (props: MovieProps) => {
  return (
    <li key={props.id} className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;

import React from 'react'

import MoviesList from './components/MoviesList'
import './App.css'
import { useFetchMovies } from './services/movies'

function App() {
  const { movies, isLoading, error, fetchMovieHandler } = useFetchMovies()

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];
  const getContent = (): JSX.Element => {
    if (isLoading) {
      return <p>Loading ...</p>
    }
    if (error) {
      return <p>{error}</p>
    }
    if (movies.length > 0) {
      return <MoviesList movies={movies} />
    }
    return <p>Found no movies.</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch movies</button>
      </section>
      <section>{getContent()}</section>
    </React.Fragment>
  )
}

export default App

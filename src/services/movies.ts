import { useCallback, useState } from 'react'
import { MovieProps } from '../components/Movie'

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://swapi.dev/api/films/')
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()
      const transformedMovies = data.results.map((movieData: any) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        }
      })
      setMovies(transformedMovies)
    } catch (error: any) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])
  // if you want to fetch data on load, you can use useEffect
  // useEffect(() => {
  //   fetchMovieHandler();
  // }, [fetchMovieHandler]);

  return { movies, isLoading, error, fetchMovieHandler }
}

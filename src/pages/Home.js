import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Layout from '../components/Layout'
import ErrorAlert from '../components/ErrorAlert'
import MovieCard from '../components/MovieCard'
import MoviePoster from '../components/MoviePoster'
import LoadingHome from '../components/LoadingHome'

export default function Home() {
  const [movies, setMovies] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    handleFetchMovies()
  }, [])

  const handleFetchMovies = async () => {
    try {
      setIsLoading(true)

      const response = await axios.get('http://code.aldipee.com/api/v1/movies')

      if (response.status !== 200) throw Error()

      setMovies(response.data.results)
    } catch (error) {
      setError('Tidak dapat memuat data film, code: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <LoadingHome />
  }

  if (error) return <ErrorAlert>{error}</ErrorAlert>

  return (
    <Layout>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3 text-white">
          <span className="font-bold text-red-700">Popular</span> Movies
        </h2>
        <Slider
          className="relative"
          slidesToShow={4}
          slidesToScroll={1}
          initialSlide={0}
          swipeToSlide={true}
          centerPadding="60px"
          centerMode={true}
          infinite={true}
        >
          {movies.map((movie) => (
            <div className="px-2" key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                <MoviePoster
                  poster_path={movie.poster_path}
                  title={movie.title}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-3 text-white">
          <span className="font-bold text-red-700">Upcoming</span> Movies
        </h2>

        <div className="flex flex-wrap justify-around">
          {movies.map((movie) => (
            <Link to={`movies/${movie.id}`} key={movie.id}>
              <div className="w-48 m-2 text-white relative">
                <MovieCard {...movie} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}

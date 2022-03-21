import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorAlert from '../components/ErrorAlert'
import LoadingDetail from '../components/LoadingDetail'

export default function MovieDetail() {
  const { id } = useParams()

  const [movieDetail, setMovieDetail] = useState(null)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(
    () => {
      handleFetchMovieDetail()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  )

  const handleFetchMovieDetail = async () => {
    if (!id) return

    try {
      setIsLoading(true)

      const response = await axios.get(
        `http://code.aldipee.com/api/v1/movies/${id}`,
      )

      if (response.status !== 200) throw Error()

      setMovieDetail(response.data)
    } catch (error) {
      setError('Tidak dapat memuat data film, code: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <LoadingDetail />

  if (error) return <ErrorAlert>{error}</ErrorAlert>

  return (
    <div
      className="relative h-screen bg-blend-multiply"
      style={{
        background: 'rgba(0, 0, 0, 0.5)',
        backgroundImage: `url(${movieDetail.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute -left-4 translate-y-56 text-white bg-black/50 p-8 rounded-md">
        <div className="flex">
          <img
            className="w-40"
            src={movieDetail.poster_path}
            alt={movieDetail.title}
          />

          <div className="ml-2">
            <h1 className="text-4xl font-bold mb-3">{movieDetail.title}</h1>
            <p className="flex items-center mb-4 text-sm text-gray-300">
              <span className="border border-gray-500 p-1 mr-1">
                Ratings {movieDetail.vote_average}/10
              </span>

              <span className="border border-gray-500 p-1 mr-1">
                {new Date(movieDetail.release_date).getFullYear()}
              </span>
              <span className="border border-gray-500 p-1 mr-2">
                {movieDetail.runtime} menit
              </span>
              {movieDetail.genres.map((genre, idx) => (
                <span className="inline-block underline" key={genre.id}>
                  {`${genre.name}${
                    idx === movieDetail.genres.length - 1 ? '' : ','
                  }`}
                </span>
              ))}
            </p>

            <p className="break-words max-w-lg">{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

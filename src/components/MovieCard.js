export default function MovieCard({
  title,
  poster_path,
  release_date,
  vote_average,
}) {
  return (
    <div>
      <div className="overflow-hidden rounded-md">
        <img
          className="transition-all duration-200 hover:scale-110"
          src={poster_path}
          alt={title}
        />
      </div>

      <div className="content">
        <h2 className="whitespace-nowrap text-ellipsis overflow-hidden ...">
          {title} {new Date(release_date).getFullYear()}
        </h2>
        <div className="absolute top-1 right-1 bg-gray-900">
          <span className="text-sm block p-1">⭐{vote_average}</span>
        </div>
      </div>
    </div>
  )
}

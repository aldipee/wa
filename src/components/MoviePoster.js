import React from 'react'

export default function MoviePoster({ poster_path, title }) {
  return (
    <div className="relative overflow-hidden rounded-md poster">
      <img
        className="w-full h-96 object-cover transition-all duration-200"
        src={poster_path}
        alt={title}
      />
      <h2 className="title transition-all duration-100 font-semibold text-xl absolute bottom-0 w-full text-center bg-white py-2">
        {title}
      </h2>
    </div>
  )
}

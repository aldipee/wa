import React from 'react'
import LoadingBlock from './LoadingBlock'

export default function LoadingDetail() {
  return (
    <div className="h-screen">
      <div className="absolute translate-y-56">
        <LoadingBlock
          className="relative -left-4"
          width={'46rem'}
          height={300}
        />
      </div>
    </div>
  )
}

import ContentLoader from 'react-content-loader'

export default function LoadingBlock({ width, height, ...props }) {
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#414968"
      foregroundColor="#666d8a"
      {...props}
    >
      <rect x="0" y="0" rx="4" ry="4" width={width} height={height} />
    </ContentLoader>
  )
}

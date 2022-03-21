import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

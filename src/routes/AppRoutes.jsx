import Home from '../pages/Home'
import Error from '../pages/Error'
import Produtos from '../pages/Produtos'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/contato" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRoutes

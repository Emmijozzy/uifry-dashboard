import { Routes, Route } from 'react-router-dom'
import Layout from './layout'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="w-full max-w-xl h-screeg">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

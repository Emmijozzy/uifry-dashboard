import { Routes, Route } from 'react-router-dom'
import Layout from './layout'
import Dashboard from './pages/Dashboard'
import Analysis from './pages/Analysis'
import Wallet from './pages/Wallet'

function App() {
  return (
    <div className="w-full max-w-[1919px] h-[100vh] dark:bg-darkbg bg-lightbg dark:text-darktext text-lighttext overflow-hidden">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/analysis' element={<Analysis />} />
          <Route path='/wallet' element={<Wallet />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

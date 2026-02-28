import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from '@pages/Root'
import Home from '@pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Root />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

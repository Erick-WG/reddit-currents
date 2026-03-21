import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from '@pages/Root'
import Home from '@pages/Home'
import PostPage from '@pages/PostPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
          <Route path=':subreddit/:title' element={<PostPage />}/>
          <Route path='*' element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

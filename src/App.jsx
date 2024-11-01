import Home from "./pages/Home"
import ProjectSection from './pages/PortfolioProject'
import WriteMeSection from './pages/WriteMe'

import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

function App() {



  return (
    <Router>
 
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/ProjectSection" element={<ProjectSection/>}/>
            <Route path="/WriteMeSection" element={<WriteMeSection/>}/>

          </Route>
        </Routes>

    </Router>
  )
}

export default App






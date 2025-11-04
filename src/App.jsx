import './App.css'
import HomePage from './components/pages/HomePage';
import ReviewMovie from "./components/pages/ReviewMovie"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from "./Layout/Layout";

function App() {
 

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path='/movie/:id' element={<ReviewMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
